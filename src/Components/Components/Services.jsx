import React from 'react'
import { Nav } from '../Nav'
import Hero from '../Hero'
import Trip from "../Trip"
import Footer from '../Footer'

const Services = () => {
  return (
    <div>
      <Nav/>
      <Hero
        cName="Hero  hero-key"
        img="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        Title="our services!"
        desc=''
        // btnText="Make plan"
        btnUrl="/"
        btnClass="show"
      />
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Services