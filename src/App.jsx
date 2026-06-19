

import './App.css'
import Navbar from './components/Header/Navbar'
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Resources from './pages/Resources';
import FreightForwarding from './pages/Services/FreightForwarding';
import CustomeClearance from './pages/Services/CustomeClearance';
import WareHousing from './pages/Services/WareHousing';
import Transport from './pages/Services/Transport';
import ProjectCargo from './pages/Services/ProjectCargo';
import CrossTrade from './pages/Services/CrossTrade';
import AddOn from './pages/Services/AddOn';
import ContainerSpecs from './pages/Resources/ContainerSpecs';
import IncoTerms from './pages/Resources/IncoTerms';
import UsefulLinks from './pages/Resources/UsefulLinks';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Consolidation from './pages/Consolidation';
import Hazardous from './pages/Hazardous';
import packaging from "./pages/packaging"
import ValueAdded from './pages/ValueAdded';
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
         <Route path="/services/consolidation" element={<Consolidation/>} />
         <Route path="/services/hazardous" element={<Hazardous/>} />
         <Route path="/services/packaging" element={<packaging/>} />
         <Route path="/services/value-added" element={<ValueAdded/>} />

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
