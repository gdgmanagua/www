import { Component } from 'preact'
import style from './style.css'

import NewsletterForm from '../../newsletter'


export default class Newsletter extends Component {
  render() {
    return (
      <section className="section" style="background-color: grey;">
        <div className="container">
          <h1 className="title has-text-white has-text-centered">Suscribete a nuestra lista</h1>
          <h2 className="subtitle has-text-white has-text-centered">para estar al tanto</h2>
          <NewsletterForm />
        </div>
      </section>
    )
  }
}
