import React from 'react'
import { Nav } from '../Nav'
import Hero from '../Hero'
import Aabout from "../About"
import Footer from "../Footer"

const About = () => {
  return (
    <div>
      <Nav/>
      <Hero
        cName="Hero hero-key"
        img="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        Title="What We Do For You "
        // desc='Detaial about us'
        // btnText="Make plan"
        btnUrl="/"
        btnClass="show"
      />
      <Aabout/>
      <Footer/>
    </div>
  )
}

export default About