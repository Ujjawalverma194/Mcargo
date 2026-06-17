import React from 'react'
import FreightForwardingHero from '../components/ServicesComponents/SubSections/FreightForwarding/FreightForwardingHero'
import FreightOverview from '../components/ServicesComponents/SubSections/FreightForwarding/FreightOverview'
import FreightJourney from '../components/ServicesComponents/SubSections/FreightForwarding/FreightJourney'
import AboutCTA from '../components/About/AboutCTA'
import Footer from '../components/Footer/Footer'

const FreightForwarding = () => {
  return (
    <div>
      <FreightForwardingHero/>
      <FreightOverview/>
      <FreightJourney/>
      <AboutCTA/>
      <Footer/>
    </div>
  )
}

export default FreightForwarding
