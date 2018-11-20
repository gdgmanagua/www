import { Component } from 'preact';

import Intro from './sections/intro';

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
        <section>
          <h1>Probando</h1>
        </section>
      </main>
    );
  }
}
