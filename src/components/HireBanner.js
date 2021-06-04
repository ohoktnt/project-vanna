import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AttentionSeeker } from 'react-awesome-reveal';

function HireBanner() {
  return (
      <AttentionSeeker effect={'pulse'}>
    <Container>
        <div class="button">
          {/* <h1>Hire now!</h1> */}
          <span>
            <span class="hire-now">Hire now!</span>
            Call me directly at{" "}
            <a class="contact-link" href="tel:+4165389999">
              416-538-9999
            </a>{" "}
            or email 
            <Link to={`/contact`}>
              <span class="contact-link"> here</span>
            </Link>
          </span>
          <div class="button__horizontal"></div>
          <div class="button__vertical"></div>
        </div>
    </Container>
      </AttentionSeeker>
  );
}

export default HireBanner;

const Container = styled.div`
  position: relative;
  margin: 50px auto;
  width: 90vw;
  color: #212529;
  
  .button {
    padding: 20px 40px;
    background: #f8edeb;
    border: none;
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 3px;

    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border: 2px solid #30343f;
      transition: transform 0.2s;
    }
    &:after {
      transform: translate(3px, 3px);
    }
    &:before {
      transform: translate(-3px, -3px);
    }

    &:hover {
      &:after,
      &:before {
        transform: translate(0);
      }

      .contact-link {
        color: #bc6c25;

      }
    }

    .contact-link {
      display: inline-block;
      text-decoration: none;
      position: relative;
      z-index: 1;
      color: #6a040f;
      padding: 0px 4px;
      transition: transform 0.2s;


      &:hover {
        transform: scale(1.1)
      }
    }

    .hire-now {
      font-size: 1.5em;
      padding: 10px;
    }
  }
`;
