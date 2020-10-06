import React from "react";
import { Section, Header } from "./styles";

const About = () => {
  return (
    <Section>
      <Header>About Us</Header>
      <p style={{ textAlign: "start" }}>
        About us We are applying for this grant because we are in a position to
        grow our anime podcast very rapidly. Amassing a large following on our
        social media platforms with a solid fan base; has shown us we have a
        identified a gap in the market that needed to be filled. Understanding
        our audience needs is imperative when building a podcast and is
        something that we have truly grasped.
        <br />
        <br />
        We at the AniMates believe, that our best chance to normalise Anime in
        UK culture, would be to create the UK’s very first anime show. This
        podcast not only brings about fun and interesting topic and discussions
        but on a larger mission, brings about inclusivity and representation for
        young black males and females, who enjoy anime but don’t have a
        community that gives them the opportunity to share their opinions and be
        apart of.
      </p>
    </Section>
  );
};

export default About;
