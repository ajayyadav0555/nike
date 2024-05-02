import React from 'react'
import { Customerreviews,Footer,Hero,Popular,Services,SpecialOffers,Subscribe,SuperQuality } from './section'
import Nav from './components/Nav'
const App = () => {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero/>
      </section>
      <section className='padding'>
      <Popular/>
      </section>
      <section className='padding'>
      <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
      <Services/>
      </section>
      <section className='padding'>
      <SpecialOffers/>
      </section>
      <section className='padding bg-pale-blue padding'>
      <Customerreviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe/>
      </section>
      <section className='padding-x bg-black padding-t pb-8'>
      <Footer/>
      </section>
    </main>
  )
}

export default App
