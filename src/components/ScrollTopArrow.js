import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

function ScrollTopArrow() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 125) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 125) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <Container onClick={scrollTop}>
      <FontAwesomeIcon icon={faArrowAltCircleUp} size="4x" 
      style={{display: showScroll ? 'flex' : 'none'}}/>
    </Container>
  );
}

export default ScrollTopArrow;

const Container = styled.div`
  position: fixed;
  width: 100%;
  bottom: 15px;
  left: calc(100vw - 95px);

  z-index: 2;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;
