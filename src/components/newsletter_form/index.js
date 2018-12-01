import { Component } from 'preact'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class NewsletterForm extends Component {
  state = {
    formSubmitted: false,
    name: '',
    email: '',
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitForm = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "list", ...this.state })
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
              <h3 className="title has-text-white has-text-centered">Gracias!</h3>
              <h4 className="subtitle has-text-white has-text-centered">Esperamos verte pronto.</h4>
            </div>
        ) : (
          <form onSubmit={this.onSubmitForm}>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Nombre" name="name" value={this.state.name} onChange={this.handleChange} />
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input className="input" type="email" placeholder="Correo" name="email" value={this.state.email} onChange={this.handleChange} required/>
                  </p>
                </div>
                <div className="field">
                  <button type="submit" className="button is-white is-outlined is-rounded">Suscribir!</button>
                </div>
              </div>
            </div>
          </form>
        ) }
      </div>
    )
  }
}
