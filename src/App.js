import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Rules from './components/Rules';
import Criteria from './components/Criteria';
import Faq from './components/Faq';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Partners from './components/Partners';
import Policy from './components/Policy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
      <Faq />
      <Timeline />
      <Prizes />
      <Partners />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
