import React from 'react'
import Hero from '../components/HomeComponents/Hero'
import Services from '../components/HomeComponents/Services'
import TrustedWorldwide from "../components/HomeComponents/TrustedWorldwide"
import Howwework from "../components/HomeComponents/Howwework"
import SuccessStories from "../components/HomeComponents/SuccessStories"
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <TrustedWorldwide/>
      <Howwework/>
      <SuccessStories/>
      <Footer/>
    </div>
  )
}

export default Home
