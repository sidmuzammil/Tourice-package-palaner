import React from 'react'
import { Nav } from '../Nav'
import Hero from '../Hero'
import ContactUs from '../ContactUs'
import Footer from "../Footer"

const Contact = () => {
  return (
    <div>
      <Nav/>
      <Hero
        cName="Hero  hero-key"
        img="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        Title="Contact Us !"
        // desc='Co'
        // btnText="Make plan"
        btnUrl="/"
        btnClass="show"
      />
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Contact