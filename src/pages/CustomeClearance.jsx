import React from 'react'
import CustomsClearanceHero from '../components/ServicesComponents/SubSections/FreightForwarding/CustomsClearance/CustomsClearanceHero'
import CustomsClearanceOverview from '../components/ServicesComponents/SubSections/FreightForwarding/CustomsClearance/CustomsClearanceOverview'
import CustomsClearanceChecklist from '../components/ServicesComponents/SubSections/FreightForwarding/CustomsClearance/CustomsClearanceChecklist'
import AboutCTA from '../components/About/AboutCTA'
import Footer from '../components/Footer/Footer'

const CustomeClearance = () => {
  return (
    <>
    <CustomsClearanceHero/>
    <CustomsClearanceOverview/>
    <CustomsClearanceChecklist/>
    <AboutCTA/>
    <Footer/>
    </>
  )
}

export default CustomeClearance
