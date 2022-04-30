import './App.css';
import Header from './components/header/Header'
import Munebar from './components/menubar/Menubar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonials'

function App() {
  return (
    <>
      <Header />
      <Munebar />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
