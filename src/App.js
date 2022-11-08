import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About2 from './components/About2/About2';
import Library from './components/Library/Library';
// import Particles from 'particlesjs';

function App() {

 
  return (
     <Router>
               <>
              <Navbar />
               <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/type1" element={<About2 />}></Route>
                <Route path="/type2" element={<Library />}></Route>
                </Routes>
                <Footer />
                </>
            </Router>
  );
}

export default App;
