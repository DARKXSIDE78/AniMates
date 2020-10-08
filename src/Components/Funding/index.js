import React from "react";
import { Section, Header, ImgWrapper, Wrapper } from "./styles";

const Funding = () => {
  return (
    <Section id='about'>
      <Wrapper>
        <Header>Funding</Header>
        <p style={{ textAlign: "start", fontSize: "1.5rem" }}>
          Funding Funding will give us the opportunity to capitalise and provide
          a platform that is lacking in the UK anime community. We intent to
          create and provide merchandise, invest in key marketing and create a
          hub that changes the perception of Anime in the urban UK culture.{" "}
          <br />
          <br />
          We will use our funding to: <br />
          - Create our own anime series <br />
          - Provide content weekly for our viewers <br />
          - Build an AniMates studio that can be used not only for the podcast,
          <br />
          but to bring the community together for socials <br />
          - Buy top of the range equipment to ensure the quality of our podcast
          is the best for our audience <br />
          -Create merchandise that can be gifted and given to our anime
          community Develop marketing strategies <br />
          <br />
          Our creative goals are: <br />
          - To be identified globally as an official Anime Organisation <br />
          - Create a "cool" and interesting forum for the anime community <br />
          - Create branded merchandise <br />
          - Secure a Spotify partnership <br />
          - Create an avenue for other Anime content creators <br />
          - Feature key influencers in the "urban" UK culture
          <br />
        </p>
      </Wrapper>
      <ImgWrapper>
        <img
          src='https://cdn71.picsart.com/210014928007202.gif'
          data-id='210014928007202'
          data-size='medium'
          data-head='1'
          data-foot='1'
          alt='#naruto #tsunade #funny   '
          width='100%'
          height='100%'
        />
      </ImgWrapper>
    </Section>
  );
};

export default Funding;
