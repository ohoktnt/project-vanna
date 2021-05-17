import React from "react";
import styled from "styled-components";

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <Container>
      <Info>
        <img src="/logoVsized.png" />
        <SocialIcons>
          <Wrap>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </Wrap>
          <Wrap>
            <FontAwesomeIcon icon={["fab", "pinterest-p"]} />
          </Wrap>
          <Wrap>
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </Wrap>
          <Wrap>
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </Wrap>
        </SocialIcons>
        <NavLinks>
          <h4>Links</h4>
          <Link to={`/`}>
          <a>Home</a>
          </Link>
          <span>•</span>
          <Link to={`/about`}>
          <a>About Me</a>
          </Link>
          <span>•</span>
          <Link to={`/services`}>
          <a>Services</a>
          </Link>
          <span>•</span>
          <Link to={`/contact`}>
          <a>Contact</a>
          </Link>
        </NavLinks>
      </Info>
      <p>©2021 Vannamakeup.com | Web Design + Development  by Tammy(ohoktnt) </p>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  // background: #43464b;
  background: #808080;
  height: 120px;

  img {
    height: 100px;
  }

   p {
     font-size: 0.75rem;
     margin: 0;
   }
`;

const Info = styled.div`
  display: flex;
  color: black;
  align-items: center;
`;

const NavLinks = styled.nav`
  display: flex;
  width: 100%;

  h4 {
    margin: 0 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 0 10px;

    &:hover {
      cursor: pointer;
      color: white;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 100%;
  color: white;
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
