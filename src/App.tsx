import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import bgImage from './assets/images/bg.jpg';

function App() {
  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <div 
      className="min-h-screen text-gray-900 dark:text-white transition-colors duration-300"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <div className="min-h-screen bg-white/80 dark:bg-gray-900/95 backdrop-blur-sm">
        <Navbar />
        <main className="pt-16">
          <section id="home" className="min-h-screen"><Home /></section>
          <section id="about" className="section-padding"><About /></section>
          <section id="services" className="section-padding bg-gray-50/80 dark:bg-gray-800/95"><Services /></section>
          <section id="skills" className="section-padding"><Skills /></section>
          <section id="projects" className="section-padding bg-gray-50/80 dark:bg-gray-800/95"><Projects /></section>
          <section id="experience" className="section-padding"><Experience /></section>
          <section id="contact" className="section-padding"><Contact /></section>
        </main>
      </div>
    </div>
  );
}

export default App;
