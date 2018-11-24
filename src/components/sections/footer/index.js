import { Component } from 'preact';


export default class Footer extends Component {
  render() {
    return(
      <footer className="footer has-background-black">
        <div className="content has-text-centered">
          <p className="has-text-white">
            <strong className="has-text-white">GDG Managua</strong> </p>
          <p className="has-text-white">
            Este sitio esta licenciado bajo <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" className="has-text-white">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    )
  }
}
