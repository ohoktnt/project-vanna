import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <Nav>
      <Logo src='logoVsized.png'/>
      <NavMenu>
        <a><span>About Me</span></a>
        <a><span>Services</span></a>
        <a><span>Contact</span></a>
      </NavMenu>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  background-color: #808080;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled.img`
  height: 200px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  max-width: 500px;
  justify-content: space-evenly;
  position: relative;
  margin-right: 50px;

  a {
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
`


