import React from "react";
import styled from "styled-components";

import Form from "./Form";
import ServiceItems from "./ServiceItems";
import HireBanner from "./HireBanner";

import ImgSlider from "./ImgSlider";
import { Link } from "react-router-dom";
import { Fade, AttentionSeeker } from "react-awesome-reveal";

import "../CTAArrow.scss";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <AboutContainer>
        <h1>Vanna Makeup Artistry</h1>
        <Fade>
          <p>
            Hi there, I'm Vanna and I would love to guide you through the beauty
            stage of your planning! Let me take the stress out of what should be
            fun and pampering part of your event planning - Hair {"&"} Makeup! I
            specialize in mobile bridal makeup applications, hair styling and
            also provide garmet and decoration rentals.
          </p>
        </Fade>
        <div>
          <Link to={`/about`}>
            <AboutButton>Learn about Vanna</AboutButton>
          </Link>
        </div>
      </AboutContainer>
      <div class="service-section">
        <h2>What we offer</h2>
        <ServiceItems />
      </div>
      <ServiceContainer>
        <Link to={`/services`}>
          <AttentionSeeker effect={"headShake"}>
            <ul>
              <li>
                <a class="animated-arrow">
                  <span class="the-arrow -left">
                    <span class="shaft"></span>
                  </span>
                  <span class="main">
                    <span class="text">Explore Services</span>
                    <span class="the-arrow -right">
                      <span class="shaft"></span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </AttentionSeeker>
        </Link>
      </ServiceContainer>
      <HireBanner />
      <h2>Contact Us</h2>
      <p>
        Interested in our services or have some questions? We'd love to connect!
        Please use the form below.
      </p>
      <Form />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  padding-bottom: 15px;

  h2 {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 470px) {
    p {
      width: 80%;
      margin: 0px auto;
    }
  }

  .service-section {
    // border: 1px solid red;
    background-color: #f0efeb;
    // z-index: -1;
  }
`;
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  width: 70%;
`;

const AboutButton = styled.button`
  margin: 20px auto;
  width: 180px;
  height: 56px;
  padding: 12px 14px;
  border-radius 4px;
  font-size: 15px;
  letter-spacing: 1.2px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  transform-origin: left center;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    background: rgb(0,0,0)
    // border: 1px solid black;
    // background: white;
    // color: black;
  }
`;

const ServiceContainer = styled.div`
  background-color: white;
  height: 100px;
  font-size: 2em;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Helvetica Neue LT W01_41488878";

  ul {
    list-style-type: none;
  }

  span {
    &:hover {
      cursor: pointer;
    }
  }
`;
