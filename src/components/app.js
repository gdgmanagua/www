import Intro from './sections/intro';
import About from './sections/about';
import Newsletter from './sections/newsletter';
import Sponsor from './sections/sponsor';
import Comment from './sections/comment';
import Event from './sections/event';
import Contact from './sections/contact';
import Social from './sections/social';
import Footer from './sections/footer';


const App = () => (
  <main id="app">
    <Intro />
    <About />
    <Newsletter />
    <Sponsor />
    <Comment />
    <Event />
    <Social />
    <Contact />
    <Footer />
  </main>
);

export default App;
