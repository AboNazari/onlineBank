import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterContainer = styled.footer`
background: #101522;
`
export const FooterWrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 1100px;
margin: 0 auto;
justify-content: center;
align-items: center;
padding: 48px 24px;
`

export const FooterLinksContainer = styled.div `
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
  padding-top: 20px;
}
`

export const FooterLinksWrapper = styled.div`
display: flex;
@media screen and (max-width: 820px){
  flex-direction: column;
}
`

export const FooterLinksItems = styled.div`
display: flex;
flex-direction: column;
margin: 16px;
align-items: flex-start;
text-align: left;
color: #fff;
width: 160px;
box-sizing: border-box;

@media screen and (max-width: 420px){
  margin: 0;
  padding: 10px;
  width: 100%;
}
`

export const FooterLinkTitle = styled.h3`
font-size: 14px;
margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
color: #fff;
margin-bottom: 0.5rem;
font-size: 14px;
text-decoration: none;

&:hover{
  transition: 0.3s ease-out;
  color: #01bf71;
}
`

export const SocialMedia = styled.section`
max-width: 1100px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
  flex-direction: column;
}
`

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
margin-bottom: 16px;
font-weight: bold;
align-items: center;
`

export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`
export const SocialIcons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 240px;
`

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`