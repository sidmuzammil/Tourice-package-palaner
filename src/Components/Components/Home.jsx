import React from "react";
import { Nav } from "../Nav";
import Hero from "../Hero";
import Destination from "./Destination";
import Trip from "../Trip";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero
        cName="Hero"
        img="https://images.unsplash.com/photo-1431032843361-ec2cd229c751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        Title="Make Your Trip Plan With Us !"
        desc='Travel Your fav destination'
        btnText="Make plan"
        btnUrl="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </div>
  );
};

export default Home;
