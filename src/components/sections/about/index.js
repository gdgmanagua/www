import { Component } from 'preact';
import Portal from 'preact-portal';

export default class About extends Component {
  state = {
    open: false
  }

  open = () => this.setState({ open:true });

  close = () => this.setState({ open:false });

  render() {
    return(
      <section className="section about" id="about">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <figure className="image">
                <img src="https://secure.meetupstatic.com/photos/event/8/8/e/e/600_471995054.jpeg" />
              </figure>
            </div>
            <div className="column content">
              <h1 className="title is-size-1 has-text-black has-text-centered">¿Que es un GDG?</h1>
              <p className="has-text-justified">Los <b>GDG</b> son grupos locales de desarrolladores que están específicamente interesados en los productos y las API de <b>Google</b>.</p>
              <p className="has-text-justified">Cada grupo local se denomina capítulo GDG y puede albergar una variedad de actividades técnicas para desarrolladores,
                desde solo unas pocas personas que se reúnen para ver nuestros últimos videos, grandes reuniones con demostraciones y charlas tecnológicas, y hackathons.</p>
              <p className="has-text-justified">La plataforma <b>GDG</b> es un nivel de membresía dentro del programa más amplio de Grupos de la <i>Comunidad de Desarrolladores de Google</i> y
                ofrece soporte personalizado para los organizadores de los capítulos locales de GDG.</p>
              <button className="button is-black is-outlined is-rounded" onClick={this.open}>Ver Más</button>
            </div>
          </div>
        </div>
        { this.state.open ? (
          <Portal into="body">
            <div className="modal is-active">
              <div className="modal-background"></div>
              <div className="modal-content">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/KlWVfEiW7Ak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
              </div>
              <button className="modal-close is-large mt-40" aria-label="close" onClick={this.close}></button>
            </div>
          </Portal>
        ) : null }
      </section>
    )
  }
};
