import React from 'react'
import Footer from '../components/Footer/Footer'
import AboutCTA from '../components/About/AboutCTA'
import ValueAddedHero from '../components/ServicesComponents/SubSections/ValueAdded/ValueAddedHero'
import ValueAddedOverview from '../components/ServicesComponents/SubSections/ValueAdded/ValueAddedOverview'
import ValueAddedCapabilities from '../components/ServicesComponents/SubSections/ValueAdded/ValueAddedCapabilities'

const ValueAdded = () => {
  return (
   <>
   <ValueAddedHero/>
   <ValueAddedOverview/>
   <ValueAddedCapabilities/>
   <AboutCTA/>
   <Footer/>
   </>
  )
}

export default ValueAdded
