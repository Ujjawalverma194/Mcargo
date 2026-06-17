import React from 'react'
import ServicesHero from '../components/ServicesComponents/ServicesHero'
import ServicesProcess from '../components/ServicesComponents/ServicesProcess'
import ServicesGrid from '../components/ServicesComponents/ServicesGrid'
import AdvisoryFirstSection from '../components/ServicesComponents/AdvisoryFirstSection'
import AboutCTA from '../components/About/AboutCTA'
import Footer from '../components/Footer/Footer'

const Services = () => {
  return (
    <div>
     <ServicesHero/>
     <ServicesProcess/>
     <ServicesGrid/>
     <AdvisoryFirstSection/>
     <AboutCTA/>
     <Footer/>
    </div>
  )
}

export default Services
