import { Component } from 'preact'
import fetch from 'unfetch'

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
              <label className="label has-text-white">Nombre</label>
              <div className="control">
                <input className="input" type="text" placeholder="Paco Borba" name="name" value={this.state.name} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white">Correo</label>
              <div className="control">
                <input className="input" type="email" placeholder="paco@bor.ba" name="email" value={this.state.email} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white">Mensaje</label>
              <div className="control">
                <textarea className="textarea" placeholder="Hola!" name="message" value={this.state.message} onChange={this.handleChange} required></textarea>
              </div>
            </div>
            <div data-netlify-recaptcha></div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-white is-outlined is-rounded is-medium" type="submit">Enviar</button>
              </div>
            </div>
          </form>
        ) }
      </div>
    )
  }
}
