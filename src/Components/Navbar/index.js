import React, { useState, useEffect } from "react";
import logo from "./../../Images/navbar_logo.png";
import mobile_logo from "./../../Images/logo_mobile.png";
import { Nav, ToggleButton, Stack, SocialLinks } from "./styles";

import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [toggle, setToggle] = useState(true);

  const useTransparentHook = (height) => {
    const [isTransparent, setTransparent] = useState(true);
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
            src={mobile_logo}
            style={{
              border: "0",
              width: "45px",
              height: "30px",
              marginLeft: "10px",
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
              style={{ color: "rgb(255, 255, 255)", fontSize: "14px" }}
              className='nav-link'
              to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{ color: "rgb(255, 255, 255)", fontSize: "14px" }}
              className='nav-link'
              to='/about'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{ color: "rgb(255, 255, 255)", fontSize: "14px" }}
              className='nav-link'
              to='/funding'>
              Funding
            </Link>
          </li>
        </ul>
        <Stack data-aos='fade-up'>
          <SocialLinks
            color='red'
            href={"https://www.youtube.com/channel/UC5JtyGZB8Ah4DHKX3Cth_Jw"}
            download>
            <i className='fab fa-youtube'></i>
          </SocialLinks>
          <SocialLinks
            color='pink'
            href='https://www.instagram.com/animatestv/'>
            <i className='fab fa-instagram'></i>
          </SocialLinks>
          <SocialLinks
            color='rgb(34,78,212)'
            href='https://www.facebook.com/animatestv'>
            <i className='fab fa-facebook'></i>
          </SocialLinks>
          <SocialLinks
            color='rgb(95 181 252)'
            href='https://twitter.com/AniMatesTV_'>
            <i className='fab fa-twitter'></i>
          </SocialLinks>
          <SocialLinks
            color='#0dff03'
            href='https://open.spotify.com/show/4Jekjgln7o4lTXN4TS9jsJ'>
            <i className='fab fa-spotify'></i>
          </SocialLinks>
          <SocialLinks color='#ff4b00' href='https://soundcloud.com/animatestv'>
            <i className='fab fa-soundcloud'></i>
          </SocialLinks>
          <SocialLinks
            color='#dc45f5'
            href='https://podcasts.apple.com/gb/podcast/the-animates-podcast/id1441325108'>
            <i className='fab fa-apple'></i>
          </SocialLinks>
        </Stack>
      </div>
    </Nav>
  );
};

export default NavBar;
