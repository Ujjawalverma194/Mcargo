import React from 'react'
import PackagingHero from '../components/ServicesComponents/SubSections/Packaging/PackagingHero'
import PackagingOverview from '../components/ServicesComponents/SubSections/Packaging/PackagingOverview'
import PackagingDeliverables from '../components/ServicesComponents/SubSections/Packaging/PackagingDeliverables'
import AboutCTA from '../components/About/AboutCTA'
import Footer from '../components/Footer/Footer'

const Packaging = () => {
  return (
  <>
  <PackagingHero/>
  <PackagingOverview/>
  <PackagingDeliverables/>
  <AboutCTA/>
  <Footer/>
  </>
  )
}

export default Packaging
