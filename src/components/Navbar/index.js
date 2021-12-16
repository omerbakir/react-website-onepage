import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    const [scrolNav, setScrolNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrolNav(true)
        } else {
            setScrolNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, []);

    const toogleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrolNav={scrolNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toogleHome}>Omer</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about"
                                          smooth={true} duration={500} spy={true}
                                          exact="true" offset={-80}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover"
                                          smooth={true} duration={500} spy={true}
                                          exact="true" offset={-80}
                                >Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services"
                                          smooth={true} duration={500} spy={true}
                                          exact="true" offset={-80}
                                >Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup"
                                          smooth={true} duration={500} spy={true}
                                          exact="true" offset={-80}
                                >Sign Up</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;