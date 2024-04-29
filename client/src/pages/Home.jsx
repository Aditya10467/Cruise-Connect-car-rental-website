import React from 'react'
import Banner from '../components/Banner'
import CarLists from '../components/CarLists'
import Footer from '../components/Footer'
import Service from '../components/Service'
import HowItWorks from '../components/HowItWorks'

const Home = () => {
  return (
    <>
      <Banner />
      <HowItWorks/>
      <Service />
      <Footer />
    </>
  )
}

export default Home
