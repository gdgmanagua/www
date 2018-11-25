import Intro from './sections/intro';
import About from './sections/about';
import Newsletter from './sections/newsletter';
import Sponsor from './sections/sponsor';
import Comment from './sections/comment';
import Event from './sections/event';
import Contact from './sections/contact';
import Footer from './sections/footer';


const App = () => (
  <main id="app">
    <Intro />
    <About />
    <Newsletter />
    <Sponsor />
    <Comment />
    <Event />
    <Contact />
    <Footer />
  </main>
);

export default App;
