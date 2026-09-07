import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Education from './components/Education';
import Life from './components/Life';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Education />
        <Life />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
