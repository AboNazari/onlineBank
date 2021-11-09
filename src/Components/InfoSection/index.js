import React from 'react';
import { Button } from '../ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, TextWrapper, Column1, Column2, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img  } from './InfoElements';
// import imgCar from '../../Images/svg-1.svg';



const  InfoSection = ({lightBg, imgStart, id, lightText, darkText, headline, description, buttonLabel, img, topLine, alt, primary, dark2, dark }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>
                {topLine}
              </TopLine>
              <Heading lightText={lightText}>
                {headline}
              </Heading>
              <Subtitle darkText={darkText}>
                {description}
              </Subtitle>
              <BtnWrap>
                <Button
                to="home" 
                spy={true}
                smooth={true}
                duration={500}
                exact="true"
                offset= {-80}
                primary = {primary ? 1 : 0}
                dark = {dark ? 1 : 0}
                dark2 = {dark2 ? 1 : 0}
                >{buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
            <Img src={img} alt={alt}/>
            </ImgWrap> 
          </Column2>
        </InfoRow>
      </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
