import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutPositioning from '../components/About/AboutPositioning'
import AboutServiceModel from '../components/About/AboutServiceModel'
import Footer from '../components/Footer/Footer'
import AboutValuesLeadership from '../components/About/AboutValuesLeadership'
import Differentiators from '../components/About/Differentiators'
import AboutCTA from '../components/About/AboutCTA'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutPositioning/>
      <AboutServiceModel/>
      <AboutValuesLeadership/>
      <Differentiators/>
      <AboutCTA/>
      <Footer/>
    </div>
  )
}

export default About
