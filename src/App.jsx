import React from 'react'
import Hero from './section/Hero'
import PopularProducts from './section/PopularProducts'
import Services from './section/Services'
import SpecialOffers from './section/SpecialOffers'
import CustomerReviews from './section/CustomerReviews'
import Subscribe from './section/Subscrie'
import Footer from './section/Footer'
import SuperQuality from './section/SuperQuality'

import Nav from './components/Nav'

const App = () => {
  return (
    
    <main className="relative">
      <Nav></Nav>
      <section className="xl:padding-l wide:padding-r"><Hero></Hero></section>
      <section className="padding"><PopularProducts/></section>
      <section className="padding"><SuperQuality/></section>
      <section className="padding-x py-10"><Services></Services></section>
      <section className="padding"><SpecialOffers></SpecialOffers></section>
      <section className="bg-pale-blue padding"><CustomerReviews></CustomerReviews></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscribe></Subscribe></section>
      <section className="bg-black padding-x padding-t pd-8"><Footer></Footer></section>
      
     
      
      
    </main>
  )
}

export default App
