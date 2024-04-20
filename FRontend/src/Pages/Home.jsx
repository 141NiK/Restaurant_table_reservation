// import React from 'react'

import About from "../Components/About"
import HeroSection from "../Components/HeroSection"
import Menu from "../Components/Menu"
import Qualities from "../Components/Qualities"
import WhoAreWe from "../Components/WhoAreWe"
import Reservation from "../Components/Reservation"

const home = () => {
  return (
    <>
    <HeroSection></HeroSection>
    <About></About>
    <Qualities></Qualities>
    <Menu></Menu>
    <WhoAreWe></WhoAreWe>
    <Reservation></Reservation>
    </>
  )
}

export default home