import { Component } from 'preact'


export default class NewsletterForm extends Component {
  state = {
    formSubmitted: false,
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
              <h3 className="title has-text-white has-text-centered">Gracias!</h3>
              <h4 className="subtitle has-text-white has-text-centered">Esperamos verte pronto.</h4>
            </div>
        ) : (
          <form name="list" method="POST" onSubmit={this.submitForm} netlify>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Nombre" name="name" />
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input className="input" type="email" placeholder="Correo" name="email" required/>
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
