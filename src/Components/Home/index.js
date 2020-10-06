import React from "react";
import pic1 from "./../../Images/goku.jpeg";
import pic2 from "./../../Images/onepiece.jpeg";
import pic3 from "./../../Images/demonslayer.jpeg";
import { Section, Container, Wrapper, ImgWrapper, Header } from "./styles";

export const AboutMe = () => {
  return (
    <>
      <Section data-aos='fade-up' id='about'>
        <Header>Podcasts</Header>
        <p style={{ textAlign: "center" }}>
          AniMates Podcast The AniMates release a new episode of the AniMates
          Podcast every fortnight featuring a new Anime enthusiast. Every
          episode, they dive into this Anime plots, themes and news. Get to know
          the hosts KB and Big Murksz by listen to the lastest episode of the
          AniMates Podcast.
        </p>
      </Section>
      <Container>
        <Wrapper data-aos='fade-up'>
          <Header>What we have in store?</Header>
          <p>
            AniMates aim to create UKs biggest Anime events. Bringing you go
            vibes, good energy and great discussions at a venue near you! To
            find out more email the AniMates Team.
          </p>
        </Wrapper>
        <ImgWrapper data-aos='flip-left' image={pic1} />
      </Container>
      <Container>
        <ImgWrapper order data-aos='flip-right' image={pic2} />
        <Wrapper order data-aos='fade-up'>
          <Header>Merchandise</Header>
          <p>
            AniMates also plan to bring you high quality anime Clothing.
            Everything for hats to hoodies; gloves and much more! For more
            information on the AniMates Clothing, please email the AniMates
            Team.
          </p>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper data-aos='fade-up'>
          <Header>Live Shows</Header>
          <p>
            The AniMates want to get you involved with all the action. We will
            be hosting live shows for you Anime fans to join. Due to the COV19
            outbreak, we will be running the LIVE SHOWS on YouTube and Discord
            until venues reopen.
          </p>
        </Wrapper>
        <ImgWrapper data-aos='flip-left' image={pic3} />
      </Container>
    </>
  );
};
