import { Component } from 'preact';
import style from './style.css';

export default class Intro extends Component {
  render() {
    return (
      <section className={style.hero}>
        <div className={style.hero_wrap}>
            <div className={style.hero_content}>
              <h2>Se un heroe. Se un GDG!</h2>
              <h1>Únete al GDG Managua</h1>
            </div>
        </div>
      </section>
    )
  }
}
