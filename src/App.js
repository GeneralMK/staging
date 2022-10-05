
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar"
// import Header from "./components/Header"
// import Services from './components/Services';
// import About from "./components/About"
// import Loan from './components/Loan';
// import OtherServices from './components/OtherServices';
// import Karabo from './components/Karabo';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from './pages/Home';
import About from './pages/About';
import Offer from './pages/Offer';
import Contact from './pages/Contact';
import theme from '../src/theme'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { useMediaQuery } from 'react-responsive'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

function App() {
  

  
  return (
    <ChakraProvider theme={theme}>
      <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />}/>
     <Route exact path='/About' element={<About />}/>
     <Route exact path='/Home' element={<Header />}/>
     <Route exact path='/Offer' element={<Offer />}/>
     <Route exact path='/Contact-Us' element={<Contact />}/>
      
    </Routes>
<Footer />
</Router>
<ScrollToTop/>
    </ChakraProvider>
  );
}

export default App;
