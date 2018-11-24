import { Component } from 'preact'


export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label has-text-white">Nombre</label>
          <div className="control">
            <input className="input" type="text" placeholder="Paco Borba" />
          </div>
        </div>
        <div className="field">
          <label className="label has-text-white">Correo</label>
          <div className="control">
            <input className="input" type="email" placeholder="paco@borba" />
          </div>
        </div>
        <div className="field">
          <label className="label has-text-white">Mensaje</label>
          <div className="control">
            <textarea className="textarea" placeholder="Hola!"></textarea>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-white is-outlined is-rounded is-medium">Enviar</button>
          </div>
        </div>
      </div>
    )
  }
}
