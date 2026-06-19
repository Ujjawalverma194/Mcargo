import React from 'react'
import WarehousingHero from '../../components/ServicesComponents/SubSections/WareHousing/WarehousingHero'
import WarehousingOverview from '../../components/ServicesComponents/SubSections/WareHousing/WarehousingOverview'
import WarehousingDeliver from '../../components/ServicesComponents/SubSections/WareHousing/WarehousingDeliver'
import AboutCTA from "../../components/About/AboutCTA"
import Footer from "../../components/Footer/Footer"
const WareHousing = () => {
  return (
   <>
   <WarehousingHero/>
   <WarehousingOverview/>
   <WarehousingDeliver/>
   <AboutCTA/>
   <Footer/>
   </>
  )
}

export default WareHousing
