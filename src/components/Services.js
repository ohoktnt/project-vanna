import React from 'react'
import styled from 'styled-components';

function Services() {
  return (
    <Container>
      <h2>Services</h2>
      <CardContainer>
        <Card>
          <h3>Make up {`&`} Hair</h3>
          <ul>
            <li>Wedding</li>
            <li>Engagement Parties</li>
            <li>Birthday</li>
            <li>Special Events</li>
          </ul>
          <img src="/bannerimgs/makeupsample.jpg"/>
        </Card>
        <Card>
          <h3>Wedding Dress Rentals</h3>
          <ul>
            <li>Dress A</li>
            <li>Dress B</li>
            <li>Dress C</li>
            <li>Adjustments Included</li> 
          </ul>
          <img src="/bannerimgs/dresssample.jpg"/>

        </Card>
        <Card>
          <h3>Decorations</h3>
          <ul>
            <li>Balloons</li>
            <li>Flowers</li>
            <li>Banners</li>
            <li>Lighting</li>
          </ul>
          <img src="/bannerimgs/flowersample.jpg"/>

        </Card>
      </CardContainer>
      <img src='Menu.png' />
    </Container>
  )
}

export default Services

const Container = styled.div`

  img {
    width: 70%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  border: 2px solid grey;
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
  
  h3 {
    width: 75%;
  };

  ul {
    width: 75%;
    list-style-type: none;
    text-align: center;
    padding-left: 0;
    margin: 0;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.4;
    border-radius: 50%;
  }
`;
