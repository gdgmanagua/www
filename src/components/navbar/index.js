import { Component } from 'preact';

import style from './style.css';
import LogoImg from '../../assets/logo.png';


export default class NavBar extends Component {
  render() {
    return (
      <nav className={`navbar is-transparent is-fixed-top ${style.navbar}`} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={LogoImg} alt="GDG Managua" width="160" />
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item has-text-white" href="#about">Acerca</a>
            <a className="navbar-item has-text-white" href="#sponsor">Patrocinadores</a>
            <a className="navbar-item has-text-white" href="#event">Eventos</a>
            <a className="navbar-item has-text-white" href="#contact">Contacto</a>
            <div className="navbar-item">
              <a className="button is-info is-inverted is-outlined is-rounded" href="#">Únete</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
