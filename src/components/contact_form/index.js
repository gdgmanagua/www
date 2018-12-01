import { Component } from 'preact'


export default class Contact extends Component {
  state = {
    formSubmitted: false,
    name: '',
    email: '',
    message: ''
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  onSubmitForm = (event) => {
    this.setState({
        formSubmitted: true
    });
    event.preventDefault();
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
          <form name="contact" method="POST" onSubmit={this.submitForm} netlify>
            <div className="field">
              <label className="label has-text-white">Nombre</label>
              <div className="control">
                <input className="input" type="text" placeholder="Paco Borba" name="name" onChange={this.handleInputChange} required />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white">Correo</label>
              <div className="control">
                <input className="input" type="email" placeholder="paco@bor.ba" name="email" onChange={this.handleInputChange} required />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white">Mensaje</label>
              <div className="control">
                <textarea className="textarea" placeholder="Hola!" name="message" onChange={this.handleInputChange} required></textarea>
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
