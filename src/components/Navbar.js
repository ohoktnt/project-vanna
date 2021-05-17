import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <Nav>
      <SocialIcons>
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
      <Link to={`/`}>
        <Logo src="logoVsized.png" />
      </Link>
      <NavMenu>
        <Link to={`/about`}>
          <a>
            <span>About Me</span>
          </a>
        </Link>
        <Link to={`/services`}>
          <a>
            <span>Services</span>
          </a>
        </Link>
        <Link to={`/contact`}>
          <a>
            <span>Contact</span>
          </a>
        </Link>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  background-color: #808080;
  height: 125px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  display: flex;
  padding-top: 10px;
  padding-left: 50px;
  height: 200px;
`;

const NavMenu = styled.div`
  display: flex;
  // flex: 1;
  // max-width: 500px;
  min-width: 300px;
  justify-content: space-evenly;
  position: relative;
  margin-right: 50px;

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    letter-spacing: 1.42px;

    span {
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 10px;
`;

const Wrap = styled.div`
  // border: 1px solid white;
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
