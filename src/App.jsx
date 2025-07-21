
import Header from './components/header/header.jsx';
import Hero from './components/hero/hero.jsx';
import About from './components/about/about.jsx';
import Skills from './components/skills/skills.jsx';
import Projects from './components/projects/projects.jsx';
import Contact from './components/contact/contact.jsx';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.jsx';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

