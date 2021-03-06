import React from 'react'
import {useState} from 'react';
import Video from '../../Videos/Video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement'

const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Sign Up for a new account today and recieve $250 in credit toward your next payment</HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact="true" offset={-80} > 
            Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;
