import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    
    <Container>
      <Info>
        <img src='/logoVsized.png'/>
        <SocialIcons>

        </SocialIcons>
        <Links>
          <h4>Links</h4>
          <a>About Me</a>
          <span>•</span>
          <a>Services</a>
          <span>•</span>
          <a>Contact</a>
        </Links>
      </Info>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  background: #43464B;
  color: white;
  height: 100px;

  img {
    height: 100px;
  }
`; 

const Info = styled.div`
  display: flex;
  color: black;
  align-items: center;

`;

const Links = styled.nav`
  display: flex;

  h4 {
    margin: 0 20px;
  }

  a {
    margin: 0 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;


const SocialIcons = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;