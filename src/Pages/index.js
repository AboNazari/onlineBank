import React from 'react'
import Sidebar from "../Components/Sidebar/index"
import Navbar from "../Components/Navbar/index"
import { useState } from 'react';
import Hero from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { HomeObjOne, HomeObjThree, HomeObjTwo } from '../Components/InfoSection/Data';
import Services from '../Components/Services';
import Footer from '../Components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
  <Navbar toggle={toggle}/>
  <Hero/>
  <InfoSection {...HomeObjOne}/>
  <InfoSection {...HomeObjTwo}/>
  <Services/>
  <InfoSection {...HomeObjThree}/>
  <Footer/>
    </>
  )
}

export default Home
