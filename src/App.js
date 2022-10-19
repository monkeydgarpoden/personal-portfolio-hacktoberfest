import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './components/about/HeroSection';
import { Footer } from './components/footer/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <HeroSection /> } /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
