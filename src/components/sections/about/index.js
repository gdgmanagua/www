import { Component } from 'preact';
import style from './style.css';


export default class About extends Component {
  render() {
    return(
      <section className={`section ${style.about}`}>
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src="https://secure.meetupstatic.com/photos/event/8/8/e/e/600_471995054.jpeg" />
              </figure>
            </div>
            <div className="column content">
              <h2 className="is-size-1 has-text-black has-text-centered">¿Que es un GDG?</h2>
              <p className="has-text-justified">Los <b>GDG</b> son grupos locales de desarrolladores que están específicamente interesados en los productos y las API de <b>Google</b>.</p>
              <p className="has-text-justified">Cada grupo local se denomina capítulo GDG y puede albergar una variedad de actividades técnicas para desarrolladores,
               desde solo unas pocas personas que se reúnen para ver nuestros últimos videos, grandes reuniones con demostraciones y charlas tecnológicas, y hackathons.</p>
              <p className="has-text-justified">La plataforma <b>GDG</b> es un nivel de membresía dentro del programa más amplio de Grupos de la <i>Comunidad de Desarrolladores de Google</i>
               y ofrece soporte personalizado para los organizadores de los capítulos locales de GDG.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
