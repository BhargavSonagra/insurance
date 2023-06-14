import './index.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import InsurancePlans from './components/InsurancePlans'; 
import Resources from './components/Resources';
import Header from './components/Header';
import FooterNav from './components/FooterNav';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/insurancePlans" element={<InsurancePlans />} />
        <Route path='resources' element={<Resources />} />
      </Routes>
      <FooterNav />
    </div>
  );
}

export default App;
