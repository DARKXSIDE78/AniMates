import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  width: 100vw;
  min-height: 300px;
  padding: 100px;
  justify-content: start;
  flex-flow: column nowrap;
  align-content: start;
  align-items: start;
  text-align: start;
  background-color: white;
  color: black;

  @media (max-width: 480px) {
    padding: 50px;
  }

  @media (max-height: 635px) {
    height: auto;
  }
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  font-family: Secular One, sans-serif;
`;
