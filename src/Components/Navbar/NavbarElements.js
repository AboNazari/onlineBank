import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav `
 background: ${({scrollNav})=> (scrollNav ? "#000" : "transparent")};
 margin-top: -80px;
 height: 80px;
 display: flex;
 align-items: center;
 justify-content: center;
 position: sticky;
 top: 0;
 font-size: 1rem;
 z-index: 10;

 @media screen and (max-width: 960px){
   transition: 0.8s all ease-in;
 }
`
export const NavbarContainer = styled.div `
  display: flex;
  max-width: 1100px;
  padding: 0 24px;
  width: 100%;
  justify-content: space-between;
  height: 80px;
  z-index:1;
` 
export const NavLogo = styled(LinkR) `
color: #fff;
justify-self: flex-start;
display: flex;
align-items: center;
cursor: pointer;
font-weight: bold;
margin-left: 24px;
text-decoration: none;
`
export const MobileIcon = styled.div `
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    color: #fff;
    position: absolute;
    font-size: 1.8rem;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: -22px;
  list-style: none;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavItem = styled.li `
  height: 80px;
`

export const NavLink = styled(LinkS) `
display: flex;
text-decoration: none;
height: 100%;
align-items: center;
color: #fff;
padding: 0 1rem;
cursor: pointer;

&.active{
  border-bottom: 5px solid #01bf71;
}

`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtnLink = styled(LinkR) `
border-radius: 50px;
background: #01bf71;
padding: 10px 22px;
white-space: nowrap;
color: #010606;
border: none;
outline: none;
font-size: 16px;
transition: 0.2s all ease-in-out;
cursor: pointer;
text-decoration: none;

&:hover{
  color: #080808;
  background: #fff;
  transition: all 0.2s ease-in-out;
}
`