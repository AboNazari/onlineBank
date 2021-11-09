import styled from "styled-components";

export const ServicesContainer = styled.div`
display: flex;
flex-direction: column;
height: 800px;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px){
height: 1100px;
}
@media screen and (max-width: 480px){
height: 1300px;
}
`

export const ServicesWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 0 50px;
align-items: center;
grid-gap: 16px;

@media screen and (max-width: 1100px){
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px){
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`

export const ServicesCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-height: 340px;
background: #fff;
padding: 30px;
border-radius: 10px;
transition: 0.2s all ease-in-out;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);

&:hover{
  transition: 0.2s all ease-in-out;
  transform: scale(1.2);
  cursor: pointer;
}
`

export const ServicesIcon = styled.img`
height: 140px;
width: 140px;
margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px){
  font-size: 2rem;
}
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`