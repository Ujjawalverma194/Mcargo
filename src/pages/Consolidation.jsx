import React from 'react'
import Footer from '../components/Footer/Footer'
import AboutCTA from '../components/About/AboutCTA'
import ConsolidationHero from '../components/ServicesComponents/SubSections/Consolidation/ConsolidationHero'
import ConsolidationOverview from '../components/ServicesComponents/SubSections/Consolidation/ConsolidationOverview'
import ConsolidationComparison from '../components/ServicesComponents/SubSections/Consolidation/ConsolidationComparison'

const Consolidation = () => {
  return (
    <>
    <ConsolidationHero/>
    <ConsolidationOverview/>
    <ConsolidationComparison/>
    <AboutCTA/>
    <Footer/>
    </>
  )
}

export default Consolidation
