import React from 'react'
import TransportHero from '../../components/ServicesComponents/SubSections/Transport/TransportHero'
import TransportOverview from '../../components/ServicesComponents/SubSections/Transport/TransportOverview'
import TransportProcess from '../../components/ServicesComponents/SubSections/Transport/TransportProcess'
import AboutCTA from '../../components/About/AboutCTA'
import Footer from '../../components/Footer/Footer'

const Transport = () => {
  return (
   <>
   <TransportHero/>
   <TransportOverview/>
   <TransportProcess/>
   <AboutCTA/>
   <Footer/>
   </>
  )
}

export default Transport
