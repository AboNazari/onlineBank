import React from 'react';
import Icon1 from '../../Images/svg-1.svg';
import Icon2 from '../../Images/svg-2.svg';
import Icon3 from '../../Images/svg-5.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesIcon, ServicesP } from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id="service">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Reduce Your Expences</ServicesH2>
          <ServicesP>We help you reduce your fees and increase your overall revenue.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>You can access our platform online from anywhere in the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Premium Benifits</ServicesH2>
          <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
