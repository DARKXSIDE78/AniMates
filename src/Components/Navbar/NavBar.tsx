import React, { useState, useEffect } from "react";
import logo from "./../../Images/navbar_logo.png";
import { Nav, ToggleButton, Stack, SocialLinks } from "./styles";

import { Link } from "react-router-dom";

interface Props {
  screen: boolean;
}

const NavBar: React.FC<Props> = (props) => {
  const [toggle, setToggle] = useState(true);

  const useTransparentHook = (height: number) => {
    const [isTransparent, setTransparent] = useState<boolean>(true);
    useEffect(() => {
      function onScroll() {
        if (window.pageYOffset > height) {
          setTransparent(false);
          return;
        }
        setTransparent(true);
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [height]);
    return isTransparent;
  };

  const isTransparent = useTransparentHook(80);
  return (
    <Nav
      path={props.screen}
      isTransparent={isTransparent}
      className='navbar navbar-expand-lg navbar-dark'>
      <Link
        className='navbar-brand'
        style={{ position: "relative", bottom: "1px" }}
        to='/'>
        <div style={{ display: "flex" }}>
          <img
            src={logo}
            style={{
              border: "0",
              width: "60px",
              display: "inline-block",
            }}
            alt='bebas-neue-font'
          />
          <h1
            style={{
              display: "inline-block",
              fontSize: "1.5rem",
              margin: "0px",
              alignSelf: "center",
              fontFamily: "Secular One, sans-serif",
            }}>
            AniMates
          </h1>
        </div>
      </Link>
      <div>
        <ToggleButton
          onClick={() => setToggle(false)}
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </ToggleButton>
      </div>
      <div className='collapse navbar-collapse' id='navbarText'>
        <ul style={{ color: "white" }} className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link
              style={{ color: "rgb(255, 255, 255)", fontSize: "12px" }}
              className='nav-link'
              to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{ color: "rgb(255, 255, 255)", fontSize: "12px" }}
              className='nav-link'
              to='/about'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{ color: "rgb(255, 255, 255)", fontSize: "12px" }}
              className='nav-link'
              to='/funding'>
              Funding
            </Link>
          </li>
        </ul>
        <Stack data-aos='fade-up'>
          <SocialLinks
            href={"https://www.youtube.com/channel/UC5JtyGZB8Ah4DHKX3Cth_Jw"}
            download>
            <i className='fab fa-youtube'></i>
          </SocialLinks>
          <SocialLinks href='https://www.instagram.com/animatestv/'>
            <i className='fab fa-instagram'></i>
          </SocialLinks>
          <SocialLinks href='https://www.facebook.com/animatestv'>
            <i className='fab fa-facebook'></i>
          </SocialLinks>
        </Stack>
      </div>
    </Nav>
  );
};

export default NavBar;
