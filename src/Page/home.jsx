import React from 'react'
import Nav from '../Components/nav'
import LandingPage from '../Components/landingPage'
import Testimonial from '../Components/testimonial'
import Feature from '../Components/feature'
import Application from '../Components/application'
import FooterCard from '../Components/footerCard'
import Footer from '../Components/footer'

const Home = () => {
  return (
    <div className="home w-full flex flex-col">
        <Nav />
        <LandingPage />
        <Testimonial />
        <Feature />
        <Application />
        <FooterCard />
        <Footer />
    </div>
  )
}

export default Home