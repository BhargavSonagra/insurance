import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import InsurancePlans from './components/InsurancePlans'; 
import Header from './components/Header';
import FooterNav from './components/FooterNav';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
        <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/insurancePlans" element={<InsurancePlans />}/>
        <Route path="/insurancePlans/:category" element={<InsurancePlans />} />
      </Routes>
      <FooterNav />
    </div>
  );
}

export default App;
