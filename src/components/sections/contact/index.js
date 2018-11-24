import { Component } from 'preact'
import style from './style.css'

import ContactForm from '../../contact_form'


export default class Contact extends Component {
  render() {
    return (
      <section className={`section is-paddingless ${style.contact}`} id="contact">
        <div className="columns is-gapless">
          <div className="column">
            <div className={style.contact_form}>
              <h3 className="title has-text-white">Contactanos</h3>
              <ContactForm />
            </div>
          </div>
          <div className={`column ${style.contact_image}`}>
          </div>
        </div>
      </section>
    )
  }
}
