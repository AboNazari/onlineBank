import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
display: grid;
top:0;
left: 0;
position: fixed;
background: #0d0d0d;
align-items: center;
height: 100%;
width: 100%;
z-index: 999;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const Icon = styled.div `
position: absolute;
right: 1.5rem;
top:1.2rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
`
export const CloseIcon = styled(FaTimes) `
color: #fff;
`

export const SidebarMenuWrapper = styled.div `
color: #fff;
`

export const SidebarMenu = styled.ul `
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
align-items: center;

@media screen and (max-width: 480px){
  grid-template-rows: repeat(6, 50px);
}
`

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
color: #fff;
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover{
  transition: 0.2s ease-in-out;
  color: #01bf71;
}
`

export const SideBtnWrap = styled.div `
display:flex;
justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
white-space: nowrap;
background: #01bf71;
border-radius: 50px;
outline: none;
border: none;
font-size: 1rem;
padding: 16px 64px;
color: #010606;
text-decoration: none;              

&:hover {
  background: #0ea063;
}
`