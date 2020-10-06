import React from "react";
import { Stack, SocialLinks, Container, Description } from "./styles";

export const Footer = () => {
  return (
    <Container id='contact'>
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
      <Description>&copy; Copyright AniMates</Description>
    </Container>
  );
};
