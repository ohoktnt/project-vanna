import React from "react";
import styled from "styled-components";
import "../CTAArrow.scss";

function Services() {
  return (
    <Container>
      <h1>Services</h1>
      <CardContainer>
        <Card>
          <h3>Make up {`&`} Hair</h3>
          <ul>
            <li>Wedding</li>
            <li>Engagement Parties</li>
            <li>Birthday</li>
            <li>Special Events</li>
          </ul>
          <img src="/bannerimgs/makeupsample.jpg" />
        </Card>
        <Card>
          <h3>Wedding Dress Rentals</h3>
          <ul>
            <li>Dress A</li>
            <li>Dress B</li>
            <li>Dress C</li>
            <li>Adjustments Included</li>
          </ul>
          <img src="/bannerimgs/dresssample.jpg" />
        </Card>
        <Card>
          <h3>Decorations</h3>
          <ul>
            <li>Balloons</li>
            <li>Flowers</li>
            <li>Banners</li>
            <li>Lighting</li>
          </ul>
          <img src="/bannerimgs/flowersample.jpg" />
        </Card>
      </CardContainer>
      <img src="Menu.png" />
      <BookContainer>
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

  img {
    width: 50%;
  }

  color: #0e1111;
  
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  border: 2px solid #cd853f;
  border-radius: 50%;
  width: 25%;
  height: calc(25vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  min-height: 200px;
  position: relative;
  box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  h3 {
    width: 75%;
    font-size: 2rem;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  ul {
    width: 75%;
    list-style-type: none;
    text-align: center;
    padding-left: 0;
    margin: 0;
    color: transparent;
    position: absolute;
    font-size: 1.25rem;
    padding-top: 10rem;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    border-radius: 50%;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  &:hover {
    transform: scale(1.05);
    border: 2px solid #c5b358;

    h3 {
      font-size: 1.5rem;
      padding-bottom: 5em;
    }

    ul {
      color: black;
      padding-top: 2em;
    }

    img {
      opacity: 0.3;
    }
  }
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
