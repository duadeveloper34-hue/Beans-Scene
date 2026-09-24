
import React from 'react'
import Hero from '../components/Hero';
import CoffeeSection from '../components/CoffeeSection';
import CoffeeMenu from '../components/CoffeeMenu';
import WhyWeDifferent from '../components/WhyWeDifferent';
import GetStarted from '../components/GetStarted';
import Feedback from '../components/Feedback';

function page() {
  return (
    <main>
      <Hero />
      <CoffeeSection />
      <CoffeeMenu />
      <WhyWeDifferent />
      <GetStarted />
      <Feedback />
    </main>
  )
}

export default page
