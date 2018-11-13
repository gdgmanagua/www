import { Component } from 'preact'
import style from './style.css'

import { Button } from 'preact-fluid';

export default class Intro extends Component {
  render() {
    return (
      <section className={style.hero}>
        <div className={style.hero_wrap}>
            <div className={style.hero_content}>
              <h2 className={style.hero_subtitle}>Se un heroe. Se un GDG!</h2>
              <h1 className={style.hero_title}>Únete al GDG Managua.</h1>
              <Button size='normal' rounded>Empecemos!</Button>
            </div>
        </div>
      </section>
    )
  }
}
