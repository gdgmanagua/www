import { h, Component } from 'preact';
import About from '../../sections/about/index.js';
import LogoImg from '../../assets/logo.png';
import style from './style.css';

export default class Intro extends Component {
  render() {
    return (
      <div className={style.intro}>
        <div className={style.intro__image}>
          <div className={style.intro__banner}>
            <img src={LogoImg} />
            <ul className={style.intro__nav}>
              <li>
                <a href="https://www.meetup.com/es-ES/gdgmanagua/" target="_blank">Meetup</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/organizers">Organizers</a>
              </li>
              <li>
                <a href="/sponsors">Sponsors</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
