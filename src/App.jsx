

import './App.css'
import Navbar from './components/Header/Navbar'
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Resources from './pages/Resources';
import FreightForwarding from './pages/FreightForwarding';
import CustomeClearance from './pages/CustomeClearance';
import WareHousing from './pages/WareHousing';
import Transport from './pages/Transport';
import ProjectCargo from './pages/ProjectCargo';
import CrossTrade from './pages/CrossTrade';
import AddOn from './pages/AddOn';
import ContainerSpecs from './pages/ContainerSpecs';
import IncoTerms from './pages/IncoTerms';
import UsefulLinks from './pages/UsefulLinks';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
function App() {
  

  return (

    <>
     <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/services/freight-forwarding" element={<FreightForwarding/>} />
         <Route path="/services/customs-clearance" element={<CustomeClearance/>} />
         <Route path="/services/warehousing" element={<WareHousing/>} />
         <Route path="/services/Transport" element={<Transport/>} />
         <Route path="/services/project-cargo" element={<ProjectCargo/>} />
         <Route path="/services/cross-trade" element={<CrossTrade/>} />
         <Route path="/services/addons" element={<AddOn/>} />
         <Route path="/resources/container-specs" element={<ContainerSpecs/>} />
         <Route path="/resources/incoterms" element={<IncoTerms/>} />
         <Route path="/resources/useful-links" element={<UsefulLinks/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/career" element={<Careers/>} />
        
      </Routes>
    </>
  )
}

export default App
