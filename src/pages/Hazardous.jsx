import React from 'react'
import Footer from '../components/Footer/Footer'
import AboutCTA from '../components/About/AboutCTA'
import HazardousHero from '../components/ServicesComponents/SubSections/Hazardous/HazardousHero'
import HazardousOverview from '../components/ServicesComponents/SubSections/Hazardous/HazardousOverview'
import HazardousSafetyProtocol from '../components/ServicesComponents/SubSections/Hazardous/HazardousSafetyProtocol'

const Hazardous = () => {
  return (
   <>
   <HazardousHero/>
   <HazardousOverview/>
   <HazardousSafetyProtocol/>
   <AboutCTA/>
   <Footer/>

   </>
  )
}

export default Hazardous
