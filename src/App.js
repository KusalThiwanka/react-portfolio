import './App.css';
import Header from './components/header/Header'
import Munebar from './components/menubar/Menubar'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonials'

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Suspense } from 'react';

function App() {
  return (
    <>
      <Header />
      
      {/* <Canvas className='canvas'>
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas> */}

      <Munebar />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
