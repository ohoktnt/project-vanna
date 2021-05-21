import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <InfoContainer>
        <Info>
          <h2>Who Am I?</h2>
          <p>
            My name is Vanna and I am a self taught beautician. With my previous
            working experince in salons, I have gained the skills and confidence
            to start up my own business and provide fun beautiful services. 
          </p>
        </Info>
        <Headshot src="/headshot.png" />
      </InfoContainer>
      <h2>Portfolio</h2>
      <PortfolioGrid>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
        <Wrap>
          <img src="/headshot.png" />
        </Wrap>
      </PortfolioGrid>
    </Container>
  );
}

export default About;

const Container = styled.div`
  width: 60%;
  margin: 10px auto;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: space-around;
  align-items: center;
`;

const Info = styled.div`
  p {
    width: 50%;
    margin: 0px auto;
  }
`;

const Headshot = styled.img`
  border-radius: 50% 10%;
  height: 25rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(4, auto);
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden; // bc image was overlapping past border
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
