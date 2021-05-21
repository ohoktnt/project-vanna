import React from "react";
import styled from 'styled-components'

function ServiceItems() {
  return (
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
        <h3>Dress Rentals</h3>
        <ul>
          <li>Wedding Dress</li>
          <li>Party Dress</li>
          <li>Evening Gowns</li>
          <li>Adjustments Included</li>
        </ul>
        <img src="/bannerimgs/dresssample.jpg" />
      </Card>
      <Card>
        <h3>Decorations</h3>
        <ul>
          <li>Balloons</li>
          <li>Flowers</li>
          <li>Backdrops</li>
          <li>Lighting</li>
        </ul>
        <img src="/bannerimgs/flowersample.jpg" />
      </Card>
    </CardContainer>
  );
}

export default ServiceItems;

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
