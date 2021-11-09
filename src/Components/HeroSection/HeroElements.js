import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;

:before{
  content: '';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100% ), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
  z-index:2;
}

`

export const HeroBg = styled.div `
position: absolute;
right: 0;
left: 0;
top: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video `
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const HeroContent = styled.div`
display: flex;
flex-direction: column;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
z-index:3;
align-items: center;
`
export const HeroH1 = styled.h1 `
font-size: 48px;
text-align: center;
color: #fff;

@media screen and (max-width: 768px){
  font-size: 40px;
}

@media screen and (max-width: 480px){
  font-size: 32px;
}
`
export const HeroP = styled.p`
font-size: 24px;
text-align: center;
color: #fff;
max-width: 600px;
margin-top: 24px;

@media screen and (max-width: 768px){
  font-size: 24px;
}

@media screen and (max-width: 480px){
  font-size: 18px;
}
`

export const HeroBtnWrapper = styled.div`
align-items: center;
display: flex;
flex-direction: column;
margin-top: 32px;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
font-size: 20px;
margin-left: 8px;
`