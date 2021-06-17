import React from "react";
import styled from "styled-components";

// Components
import Form from "./Form";
import HeaderHero from "./HeaderHero";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <Container>
      <HeaderHero headerImg={"party.jpg"} slogan={"Let's Party!"} />
      <h2>Contact Us</h2>
      <ContactInfo>
        <Info>
          <h3>Vanna Makeup Artistry</h3>
          <div>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;Toronto, ON Canada
            </span>
            <a href="tel:+4165389999">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>416-538-9999</span>
            </a>
            <a href="mailto:info@vannamakeup.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>info@vannamakeup.com</span>
            </a>
          </div>
        </Info>
        <Social>
          <a href="https://www.instagram.com/makeupby_vanna/" target="_blank" rel="noreferrer">
            <Wrap>
              <IconWrap id="ig-icon">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </IconWrap>
            </Wrap>
          </a>
          <a href="https://www.facebook.com/vanna.artistry" target="_blank" rel="noreferrer">
            <Wrap>
              <IconWrap id="fb-icon">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </IconWrap>
            </Wrap>
          </a>
        </Social>
      </ContactInfo>
      <h3>We cant wait to hear from you!</h3>
      <FormSection>
        <p>
          Let's discuss your special day and how we can help! To get in touch or
          book an appointment, please fill out our inquiry form here.
        </p>
        <Form />
      </FormSection>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 50px;
  font-size: 1.25rem;

  h2 {
    margin: 5px;
    font-size: 1.4em;
    padding-top: 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin: 0px auto;

  a {
    text-decoration: none;
    color: inherit;
    padding: 2px 0;
  }

  @media screen and (max-width: 470px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;

    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      letter-spacing: 1.42px;

      span {
        position: relative;
        margin: 0px 10px;

        &:after {
          content: "";
          height: 2px;
          background: black;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform-origin: left center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          transform: scaleX(0);
        }
      }

      &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
  }

  @media screen and (max-width: 470px) {
    width: 100vw;

    div {
      margin: 0px auto;
    }
  }
`;

const Social = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrap = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  padding: 6px;
  border-radius: 50%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  background: linear-gradient(0deg, #ddd, #fff);
  transition: 0.5s;

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  #fb-icon:hover {
    color: #3b5998;
  }

  #ig-icon:hover {
    color: #e4405f;
  }
`;

const IconWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius 50%;
  background: linear-gradient(0deg, #fff, #ddd);
  font-size: 30px;
  color: #262626;
  transition: .5s;

`;

const FormSection = styled.div`
  p {
    margin-left: auto;
    margin-right: auto;
    width: 50%;

    @media screen and (max-width: 470px) {
      width: 80%;
    }
  }
`;
