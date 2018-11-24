import { Component } from 'preact'
import style from './style.css'

import ContactForm from '../../contact_form'


export default class Contact extends Component {
  render() {
    return (
      <section className={`section is-paddingless ${style.contact}`}>
        <div className="columns is-gapless">
          <div className="column">
            <div className={style.contact_form}>
              <h3 className="title has-text-white">Contactanos</h3>
              <ContactForm />
            </div>
          </div>
          <div className="column">
            <figure className="image">
              <img src="https://phandroid.s3.amazonaws.com/wp-content/uploads/2013/02/Google-Glass-Foundry-developers.jpeg" alt="GDG" />
            </figure>
          </div>
        </div>
      </section>
    )
  }
}
