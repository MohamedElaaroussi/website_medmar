import React, { Fragment } from 'react'

import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import FeaturesSection from '../components/FeaturesSection'
import ServicesSection from '../components/ServicesSection'
import LasteSection from '../components/LasteSection'

export default function Home() {
  return (
    <>
       <Fragment>
       <HeroSection />
       <AboutSection />
       <FeaturesSection />
       <ServicesSection />
       <LasteSection />
       </Fragment>
    </>
  )
}
