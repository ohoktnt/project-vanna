import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <Container>
      <Info>
        <img src="/logoVsized.png" />
        <SocialIcons>
          <a href="https://www.instagram.com/makeupby_vanna/" target="_blank">
            <Wrap>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </Wrap>
          </a>
          <a href="https://www.facebook.com/van.nguyen.796569" target="_blank">
            <Wrap>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </Wrap>
          </a>
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
      <p>©2021 Vannamakeup.com | Web Design + Development by Tammy(ohoktnt) </p>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  // background: #43464b;
  background: black;
  height: 120px;

  img {
    height: 100px;
  }

  p {
    font-size: 0.75rem;
    margin: 0;
    color: white;
  }
`;

const Info = styled.div`
  display: flex;
  color: black;
  align-items: center;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-grow: 2;
  width: 100%;
  padding-right: 65px;
  color: white;

  h4 {
    margin: 0 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 0 10px;

    &:hover {
      cursor: pointer;
      color: #808080;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 25%;
  padding-right: 10px;
  color: white;

  a {
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
