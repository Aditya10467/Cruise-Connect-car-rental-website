import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Service from '../components/Service'
import about from '../assets/images/aboutphoto.jpg'
import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <>
      <Hero img={about} pageName="About" />
      <AboutUs/>
      <Service />
      <Footer />
    </>
  )
}

export default About
