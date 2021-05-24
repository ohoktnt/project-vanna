import React from "react";
import styled from "styled-components";
import Gallery from 'react-grid-gallery';

import { images } from './imagesArr';

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
      <GalleryContainer>
        <Gallery images={images} enableImageSelection={false}/>
      </GalleryContainer>
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

const GalleryContainer = styled.div`
  display: grid;
`;

