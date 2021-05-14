import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <AboutContainer>
        <h1>Vanna Makeup Artistry</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <AboutButton>Learn about Vanna</AboutButton>
      </AboutContainer>
      <ServiceContainer>
        <span>Explore Services {'>'}</span>
      </ServiceContainer>
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
`
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
`

const ServiceContainer = styled.div`
  background-color: #808080;
  height: 100px;
  font-size: 2em;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  justify-content: center;


`;
