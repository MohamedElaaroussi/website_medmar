import React from 'react'
import ServicesTwo from './ServicesTwo'
import ServicesThree from './ServicesThree'
import ServicesFour from './ServicesFour'
import ServicesFive from './ServicesFive'
import ServicesSix from './ServicesSix'

export default function ListeServices() {
  return (
    <section className="container-fluid light-bg overflow-hidden mt-5 mt-md-4">
    <div className="container">
    <div className="row gy-5 gy-md-0">
      <ServicesTwo />
      <ServicesThree />
      <ServicesFour />
      <ServicesFive />
      <ServicesSix />
    </div>
    </div>
    </section>
  )
}
