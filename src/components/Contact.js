import React, { useState } from "react";
import styled from "styled-components";
import Form from './Form';
import HeaderHero from './HeaderHero';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {

  return (
    <Container>
      <HeaderHero headerImg={'party.jpg'}/>
      <h1>Contact Us</h1>
      <ContactInfo>
        <Info>
          <h2>Vanna Makeup Artistry</h2>
          <a href="mailto:info@vannamakeup.com">info@vannamakeup.com</a>
          <a href="tel:+4161234567">416-123-4567</a>
        </Info>
        <Social>
          <a href="https://www.instagram.com/makeupby_vanna/" target="_blank">
            <Wrap>
              <FontAwesomeIcon icon={["fab", "instagram"]}  size="lg"/>
            </Wrap>
          </a>
          <a href="https://www.facebook.com/van.nguyen.796569" target="_blank">
            <Wrap>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg"/>
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

  h2 {
    margin: 0;
    font-size: 1em;
  }

  h3 {
    padding-top: 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  margin: 0px auto;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Social = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrap = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: pointer;
  transition: font-size 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    border: 2px solid white;
    font-size: 1.3em;
  }
`;

const FormSection = styled.div`
  p {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;
