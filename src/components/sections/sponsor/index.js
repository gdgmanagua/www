import { Component } from 'preact';
import style from './style.css';

import LogoGDG from '../../../assets/sponsors/gdg.png';
import LogoWTM from '../../../assets/sponsors/wtm.png';
import LogoRain from '../../../assets/sponsors/rain.png';
import LogoWaffle from '../../../assets/sponsors/waffle-studio.png';

const SponsorCard = (props) => {
  return (
    <div className={style.sponsor_card}>
      <header className={style.sponsor_header}>
        <p className={style.sponsor_header_title}>{props.name}</p>
      </header>
      <div className={style.sponsor_content}>
        <img className={style.sponsor_image} src={props.logo} alt={`Logo ${props.name}`} />
      </div>
      <footer className={style.sponsor_footer}>
        <a target="_blank" href={props.website} class="card-footer-item">Sitio</a>
      </footer>
    </div>
  )
}

export default class Sponsor extends Component {
  render() {
    return(
      <section className="section">
        <div className="container">
          <h1 class="title has-text-centered">Regional</h1>
          <div className="columns">
            <div className="column">
              <SponsorCard 
                name="Google Developers"
                logo={LogoGDG}
                website="https://developers.google.com/" />
            </div>
            <div className="column">
              <SponsorCard 
                name="Women Tech Makers"
                logo={LogoWTM}
                website="https://www.womentechmakers.com/" />
            </div>
          </div>
          <hr />
          <h1 class="title has-text-centered">Local</h1>
          <div className="columns">
            <div className="column">
              <SponsorCard 
                name="Rain Agency"
                logo={LogoRain}
                website="https://rain.agency/" />
            </div>
            <div className="column">
              <SponsorCard 
                name="Waffle Studio"
                logo={LogoWaffle}
                website="https://www.waffle.studio/" />
            </div>
          </div>
          <a href="#contact" className="button is-black is-outlined is-rounded">Colaborar</a>
        </div>
      </section>
    )
  }
}
