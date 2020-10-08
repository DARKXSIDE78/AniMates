import React from "react";
import { Stack, SocialLinks, Container, Description } from "./styles";

export const Footer = () => {
  return (
    <Container id='contact'>
      <Stack data-aos='fade-up'>
        <SocialLinks
          color='red'
          href={"https://www.youtube.com/channel/UC5JtyGZB8Ah4DHKX3Cth_Jw"}
          download>
          <i className='fab fa-youtube'></i>
        </SocialLinks>
        <SocialLinks color='pink' href='https://www.instagram.com/animatestv/'>
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
          mobile
          href='https://open.spotify.com/show/4Jekjgln7o4lTXN4TS9jsJ'>
          <i className='fab fa-spotify'></i>
        </SocialLinks>
        <SocialLinks
          mobile
          color='#ff4b00'
          href='https://soundcloud.com/animatestv'>
          <i className='fab fa-soundcloud'></i>
        </SocialLinks>
        <SocialLinks
          color='#9c27b0'
          mobile
          href='https://podcasts.apple.com/gb/podcast/the-animates-podcast/id1441325108'>
          <i className='fab fa-apple'></i>
        </SocialLinks>
      </Stack>
      <Description>&copy; Copyright AniMates</Description>
    </Container>
  );
};
