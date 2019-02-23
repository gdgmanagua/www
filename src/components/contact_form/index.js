import { Component } from 'preact';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends Component {
  state = {
    formSubmitted: false,
    name: '',
    email: '',
    message: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitForm = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.setState({ formSubmitted: true }))
      .catch(error => console.log(error));
    e.preventDefault();
  }

  render() {
    return (
      <div>
        { this.state.formSubmitted ? (
          <div>
            <h3 className="title has-text-white">Gracias!</h3>
            <h4 className="subtitle has-text-white">Pronto te contactaremos.</h4>
          </div>
        ) : (
          <form name="contact" onSubmit={this.onSubmitForm}>
            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="Nombre Completo" name="name" value={this.state.name} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input" type="email" placeholder="Correo Electrónico" name="email" value={this.state.email} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Mensaje" name="message" value={this.state.message} onChange={this.handleChange} required></textarea>
              </div>
            </div>
            <div data-netlify-recaptcha></div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-white is-outlined is-medium" type="submit">Enviar</button>
              </div>
            </div>
          </form>
        ) }
      </div>
    )
  }
}
