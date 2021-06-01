import React from "react";
import styled from 'styled-components'

function ServiceItems(props) {
  return (
    <CardContainer>
      <Card onClick={() => props.clickService("makeup")}>
        <h3>Make up {`&`} Hair</h3>
        <ul>
          <li>Wedding</li>
          <li>Engagement Parties</li>
          <li>Birthday</li>
          <li>Special Events</li>
        </ul>
        <img src="/servicesImgs/service-card2.jpg" />
      </Card>
      <Card onClick={() => props.clickService("dress")}>
        <h3>Dress Rentals</h3>
        <ul>
          <li>Wedding Dress</li>
          <li>Party Dress</li>
          <li>Evening Gowns</li>
          <li>Adjustments Included</li>
        </ul>
        <img src="/servicesImgs/service-card3.jpg" />
      </Card>
      <Card onClick={() => props.clickService("deco")}> 
        <h3>Decorations</h3>
        <ul>
          <li>Balloons</li>
          <li>Flowers</li>
          <li>Backdrops</li>
          <li>Lighting</li>
        </ul>
        <img src="/servicesImgs/service-card1.jpg" />
      </Card>
    </CardContainer>
  );
}

export default ServiceItems;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }

`;

const Card = styled.div`
  // border: 2px solid #cd853f;
  // border-radius: 5px;
  margin: 25px 25px;
  width: 25vw;
  height: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  min-height: 200px;
  position: relative;
  box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  z-index: 1;
  h3 {
    width: 75%;
    font-size: 1.5rem;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    background-color: white;
    font-weight: 450;
    border-radius: 10px;
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
    // opacity: 0.6;
    // border-radius: 5px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  &:hover {
    transform: scale(1.05);
    // border: 2px solid #c5b358;
    color: white;
    
    h3 {
      background-color: transparent;
      font-size: 1.5rem;
      font-weight: 600;
      padding-bottom: 5em;
    }

    ul {
      color: white;
      padding-top: 2em;
    }

    img {
      filter: brightness(50%);
    }
  }
`;
