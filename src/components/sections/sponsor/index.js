import style from './style.css';
import LogoGDG from '../../../assets/sponsors/gdg.png';
import LogoWTM from '../../../assets/sponsors/wtm.png';
import LogoRain from '../../../assets/sponsors/rain.png';
import LogoWaffle from '../../../assets/sponsors/waffle-studio.png';
import LogoDefault from '../../../assets/sponsors/default.png';

const SponsorCard = (props) => (
  <div className={style.sponsor_card}>
    <header className={style.sponsor_header}>
      <p className={style.sponsor_header_title}>{props.name}</p>
    </header>
    <div className={style.sponsor_content}>
      <img className={style.sponsor_image} src={props.logo} alt={`Logo ${props.name}`} />
    </div>
    <footer className={style.sponsor_footer}>
      <a target="_blank" href={props.websiteUrl} className={style.sponsor_footer_link}>{props.websiteLabel}</a>
    </footer>
  </div>
);

const Sponsor = () => (
  <section className="section">
    <div className="container">
      <div>
        <h3 className={style.section_title}>Nuestros Patrocinadores</h3>
        <p className="has-text-centered">No somos nada sin nuestros Patrocinadores.</p>
      </div>
      <div>
        <div className={style.section_row}>
          <h2 className={style.section_row_title}>Regional</h2>
          <div className="columns">
            <div className="column">
              <SponsorCard
                name="Google Developers"
                logo={LogoGDG}
                websiteUrl="https://developers.google.com/"
                websiteLabel="developers.google.com" />
            </div>
            <div className="column">
              <SponsorCard
                name="Women Tech Makers"
                logo={LogoWTM}
                websiteUrl="https://www.womentechmakers.com/"
                websiteLabel="www.womentechmakers.com" />
            </div>
          </div>
        </div>
        <div className={style.section_row}>
          <h2 className={style.section_row_title}>Local</h2>
          <div className="columns">
            <div className="column">
              <SponsorCard
                name="Rain Agency"
                logo={LogoRain}
                websiteUrl="https://rain.agency/"
                websiteLabel="rain.agency" />
            </div>
            <div className="column">
              <SponsorCard
                name="Waffle Studio"
                logo={LogoWaffle}
                websiteUrl="https://www.waffle.studio/"
                websiteLabel="waffle.studio" />
            </div>
            <div className="column">
              <div className={style.sponsor_card}>
                <header className={style.sponsor_header}>
                  <p className={style.sponsor_header_title}>Conviértete en Sponsor</p>
                </header>
                <div className={style.sponsor_content}>
                  <img className={style.sponsor_image} src={LogoDefault} alt={`Logo Default`} />
                </div>
                <footer className={style.sponsor_footer}>
                  <a href="#contact" className={style.sponsor_btn}>Quiero ser Sponsor!</a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section >
);

export default Sponsor;
