import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavHeader,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn,
} from "./Navbar.styles";
import { FaTimes, FaBars } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#38b3d0" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon /> <NavHeader>CryptoTracker</NavHeader>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/cryptocurrencies">Cryptocurrencies</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/news">News</NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink href="https://twitter.com/CryptoTrackerAt" target="_blank">
                    <Button primary >
                      Follow{" "}
                      <BsTwitter
                        style={{
                          color: '#fff',
                        }}
                      />
                    </Button>
                  </NavBtnLink>

                ) : (
                  <Button onClick={closeMobileMenu} primary>
                    Follow us on Twitter
                  </Button>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
