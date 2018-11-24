import { Component } from 'preact';

import Intro from './sections/intro';
import About from './sections/about';
import Contact from './sections/contact'


export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <main id="app">
        <Intro />
        <About />
        <Contact />
      </main>
    );
  }
}
