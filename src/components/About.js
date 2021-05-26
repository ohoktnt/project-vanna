import React from "react";
import styled from "styled-components";
import Gallery from "react-grid-gallery";
import HireBanner from "./HireBanner";

import HeaderHero from "./HeaderHero";

import { images } from "./imagesArr";

function About() {
  return (
    <Container>
      <HeaderHero
        headerImg={"makeup3.jpg"}
        slogan={"Experience the journey"}
        // slogan={"Who am I?"}
      />
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
      <HireBanner />
      <GalleryContainer>
        <h2>Portfolio</h2>
        <Gallery images={images} enableImageSelection={false} />
      </GalleryContainer>
    </Container>
  );
}

export default About;

const Container = styled.div`
  width: 100%;
  margin: 10px auto;

`;

const InfoContainer = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  margin: 10px auto;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

`;

const Info = styled.div`
  min-height: 200px;
  max-height: 350px;
  p {
    width: 50%;
    margin: 0px auto;
  }

  @media screen and (max-width: 600px) {
    p {
      // border: 1px solid red;
      width: 90%;
      padding-bottom: 5px;
    }
  }

`;

const Headshot = styled.img`
  border-radius: 50% 10%;
  position: relative;
  height: 25vw;
  min-height: 200px;
  max-height: 350px;
`;

const GalleryContainer = styled.div`
  display: grid;
  width: 70%;
  margin: 0px auto;

  // padding-top: 100px;
`;
