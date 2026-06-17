

import './App.css'
import Navbar from './components/Header/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Resources from './pages/Resources';
import FreightForwarding from './pages/FreightForwarding';
import CustomeClearance from './pages/CustomeClearance';
function App() {
  

  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/services/freight-forwarding" element={<FreightForwarding/>} />
         <Route path="/services/customs-clearance" element={<CustomeClearance/>} />
      </Routes>
    </>
  )
}

export default App
