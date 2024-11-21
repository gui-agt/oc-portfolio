import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Services from './components/Services';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Contact />
      </main>
    </div>
  );
}

export default App