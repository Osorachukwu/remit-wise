import React from 'react'
import NavBar from './components/NavBar'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import Footer from './components/Footer'
import EarnForOver from './components/EarnForOver'
import SetUp from './components/SetUp'
import WeHelpIndividuals from './components/WeHelpIndividuals'
import MakingPaymentSimple from './components/MakingPaymentSimple'
import Testimonials from './components/Testimonials'
import AboutUs from './components/AboutUs'
import Example from './components/Example'
import AltHero from './components/AltHero'
import { Team } from './components/Team'
import ContactUs from './components/ContactUs'
import OpeningTime from './components/OpeningTime'

export default function App() {
  return (
    <div className=''>
      <OpeningTime />
      <NavBar />
      {/* <Hero /> */}
      <AltHero />
      <AboutUs />
      {/* <EarnForOver /> */}
      <SetUp />
      <Team />
      <Testimonials />
      {/* <Example /> */}
      {/* <WeHelpIndividuals /> */}
      <FAQ />
      <ContactUs />
      <MakingPaymentSimple />

      <Footer />
    </div>
  )
}
