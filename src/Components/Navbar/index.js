import { Nav, NavbarContainer, NavLogo, NavItem, NavLink, NavMenu, NavBtn, NavBtnLink, MobileIcon } from './NavbarElements';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = ()=>{
    if(window.scrollY >=80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
   window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = ()=>{
    scroll.scrollToTop();
  };

  return (
    <>
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
      <NavLogo to="/" onClick={toggleHome}>Nazari</NavLogo>
      <MobileIcon onClick= {toggle}>
        <FaBars/>
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80} >About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="discover" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Discover</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="service" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Service</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Sign Up</NavLink>
        </NavItem>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar;