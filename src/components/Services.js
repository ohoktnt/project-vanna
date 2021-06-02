import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../CTAArrow.scss";
import ServiceItems from "./ServiceItems";
import HeaderHero from "./HeaderHero";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import Gallery from "react-grid-gallery";
import { images } from "./imagesArr";

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <Container>
      <HeaderHero
        headerImg={"wedding.jpg"}
        slogan={"For events as unique as you"}
      />
      <h2>Services</h2>
      <p>Click on the service to see the photos in the gallery below!</p>
      <ServiceItems clickService={setSelectedService} />
      {selectedService && (
        <ServiceGallery>
          <span onClick={() => setSelectedService(null)}>CLOSE</span>
          <Fade>
            <Gallery
              images={images[selectedService]}
              enableImageSelection={false}
              backdropClosesModal = {true}
            />
          </Fade>
        </ServiceGallery>
      )}
      <Fade>
        <img id="menu" src="Menu.png" />
        <p>* Price available upon request</p>
      </Fade>
      <BookContainer>
        <Link to={`/contact`}>
          <AttentionSeeker effect={"headShake"}>
            <ul>
              <li>
                <a class="animated-arrow">
                  <span class="the-arrow -left">
                    <span class="shaft"></span>
                  </span>
                  <span class="main">
                    <span class="text">Book Appointment</span>
                    <span class="the-arrow -right">
                      <span class="shaft"></span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </AttentionSeeker>
        </Link>
      </BookContainer>
      <RhombGallery>
        <img src="/images/pose1.JPG" alt="" />
        <img src="/servicesImgs/service6.jpg" alt="" />
        <img src="/servicesImgs/service1.jpg" alt="" />
        <img src="/servicesImgs/service3.jpg" alt="" />
        <img src="/servicesImgs/service9.jpg" alt="" />
        <img src="/servicesImgs/service8.jpg" alt="" />
        <img src="/servicesImgs/service5.jpg" alt="" />
        <img src="/servicesImgs/service2.jpg" alt="" />
        <img src="/servicesImgs/service7.jpg" alt="" />
        <img src="/servicesImgs/service4.jpg" alt="" />
      </RhombGallery>
    </Container>
  );
}

export default Services;

const Container = styled.div`
  h1 {
    letter-spacing: 2px;
    font-size: 2.5rem;
  }

  #menu {
    max-width: 50vw;
    min-width: 300px;
  }
  
  p {
    margin: 0 auto;
    width: 80%;
  }

  color: #0e1111;


  @media screen and (max-width: 700px) {
    width: 100%;
  }

}`;

const RhombGallery = styled.div`
  position: relative;
  flex-grow: 1;
  margin: auto;
  max-width: 1200px;
  max-height: 1200px;
  padding: 20px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2vmin;
  justify-items: center;
  align-items: center;

  img {
    z-index: 1;
    grid-column: span 2;
    max-width: 100%;
    margin-bottom: -52%;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transform: scale(1);
    transition: all 0.25s;

    &:nth-child(7n + 1) {
      grid-column: 2 / span 2;
    }

    &:hover {
      z-index: 2;
      transform: scale(1.25);
    }
  }
`;

const BookContainer = styled.div`
  padding: 20px;
  background-color: white;
  height: 100px;
  font-size: 2em;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Helvetica Neue LT W01_41488878", serif, "Helvetica Neue";

  ul {
    list-style-type: none;
  }

  span {
    &:hover {
      cursor: pointer;
    }
  }
`;

const ServiceGallery = styled.div`
  display: grid;
  background-color: #f0efeb;
  width: 90%;
  padding: 20px 5vw;
  margin: 5px auto;

  span {
    margin: 10px auto;
    margin-top: 0;
    cursor: pointer;
    width: auto;
    letter-spacing: 2px;
    font-size: 1rem;
    border-bottom: 1px solid black;
    width: 15vw;

    &:hover {
      font-weight: 600;
    }
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    padding: 20px 0;
  }
  
`;
