import { Component } from 'preact';

import style from './style.css';
import LogoImg from '../../assets/logo.png';


export default class NavBar extends Component {
  state = {
    isNavTransparent: true,
    isMenuActive: false,
    isCTAVisible: false
  }

  componentDidMount() {
    this.transparencyBreakpoint = window.innerHeight / 2;
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (!this.state.isMenuActive) {
        if (window.scrollY < this.transparencyBreakpoint) {
            this.setState({
                isNavTransparent: true,
                isCTAVisible: false
            });
        }
        else {
            this.setState({
                isNavTransparent: false,
                isCTAVisible: true
            });
        }
    }
    else{
        if (window.scrollY < this.transparencyBreakpoint) {
            this.setState({
                isCTAVisible: false
            });
        }
        else {
            this.setState({
                isCTAVisible: true
            });
        }
    }
  }

  doScrollIntoView = (e) => {
    const view = e.currentTarget.dataset.view;
    return document.querySelector(`${view}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  render() {
    const textColor = this.state.isNavTransparent ? 'has-text-white' : 'has-text-black';
    const buttonColor = this.state.isNavTransparent ? 'is-white' : 'is-black';
    return (
      <nav className={`navbar ${(this.state.isNavTransparent) ? style.navbar_transparent : ''} is-transparent is-fixed-top ${style.navbar}`} role="navigation" aria-label="main navigation">
        <div className="container">
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
              <a className={`navbar-item ${textColor}`} href="#about">Acerca</a>
              <a className={`navbar-item ${textColor}`} href="#sponsor">Patrocinadores</a>
              <a className={`navbar-item ${textColor}`} href="#event">Eventos</a>
              <a className={`navbar-item ${textColor}`} href="#contact">Contacto</a>
              <div className="navbar-item">
                <a className={`button ${buttonColor} is-outlined is-rounded`} href="#" data-view="#about" onClick={this.doScrollIntoView}>Únete</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
