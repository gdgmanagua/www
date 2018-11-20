import { Component } from 'preact';
import LogoImg from '../../assets/logo.png';


export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={LogoImg} alt="GDG Managua" width="112" height="28" />
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#">About</a>
            <a className="navbar-item" href="#">Sponsors</a>
            <a className="navbar-item" href="#">Events</a>
            <a className="navbar-item" href="#">Contact</a>
          </div>
        </div>
      </nav>
    )
  }
}
