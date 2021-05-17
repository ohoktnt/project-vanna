import React from "react";
import styled from "styled-components";
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
        <Links>
          <h4>Links</h4>
          <a>About Me</a>
          <span>•</span>
          <a>Services</a>
          <span>•</span>
          <a>Contact</a>
        </Links>
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

const Links = styled.nav`
  display: flex;
  width: 100%;

  h4 {
    margin: 0 20px;
  }

  a {
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
