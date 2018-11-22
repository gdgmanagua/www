import { Component } from 'preact'


export default class NewsletterForm extends Component {
  render() {
    return (
      <form>
        <div className="field is-horizontal">
          <div className="field-body">

            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Nombre" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <p className="control is-expanded has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Correo" value="alex@smith.com" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <button type="submit" className="button is-white is-outlined is-rounded">Suscribir!</button>
            </div>

          </div>
        </div>
      </form>
    )
  }
}
