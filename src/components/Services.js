import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../CTAArrow.scss";
import ServiceItems from "./ServiceItems";

function Services() {
  return (
    <Container>
      <h1>Services</h1>
<ServiceItems />
      <img id="menu" src="Menu.png" />
      <BookContainer>
        <Link to={`/contact`}>
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
        </Link>
      </BookContainer>
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
    width: 50%;
  }

  color: #0e1111;
`;

const BookContainer = styled.div`
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
