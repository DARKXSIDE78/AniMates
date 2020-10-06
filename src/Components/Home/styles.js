import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  width: 100vw;
  min-height: 300px;
  padding: 100px;
  justify-content: start;
  flex-flow: column nowrap;
  align-content: center;
  align-items: center;
  background-color: rgb(41 52 61);
  color: white;

  @media (max-width: 480px) {
    padding: 50px;
  }

  @media (max-height: 635px) {
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 225px;
  @media (max-width: 480px) {
    flex-flow: column nowrap;
    height: 500px;
  }
`;

export const Wrapper = styled.div`
  width: 60%;
  display: flex;
  color: white;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  background-color: #a65052e3;
  @media (max-width: 480px) {
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    order: ${(props) => (props.order ? 1 : 0)};
  }
`;

export const ImgWrapper = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-blend-mode: saturation;
  width: 40%;
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    order: ${(props) => (props.order ? 2 : 0)};
  }
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  font-family: Secular One, sans-serif;
`;
