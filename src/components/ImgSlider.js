import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container>
      <Carousel {...settings}>
        <Wrap>
          <img src="./bannerimgs/homeheader1.jpg" />
        </Wrap>
        <Wrap>
          <img src="./bannerimgs/makeup.jpg" />
        </Wrap>
        <Wrap>
          <img src="./bannerimgs/party.jpg" />
        </Wrap>
        <Wrap>
          <img src="/banner-temp1.jpg" />
        </Wrap>
      </Carousel>
      <HeaderText>
        <Fade duration={2000} direction={"up"}>
          <h1>MAKEUP BEYOND IMAGINATION</h1>
          <FontAwesomeIcon icon={faAngleDown} size="2x" class="arrow-down" />
        </Fade>
      </HeaderText>
    </Container>
  );
}

export default ImgSlider;

const Container = styled.div`
  position: relative;
`;

const HeaderText = styled.div`
  position: absolute;
  // border: 2px solid red;
  top: 20vmin;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(45vmin - 20px);
  width: 25vw;
  padding: 20px;
  margin: 0 37.5vw;
  font-size: 2vw;

  .arrow-down {
    animation: animateDown infinite 1.5s;
    height: 5vmin;
  }
`;

const Carousel = styled(Slider)`
  max-height: calc(100vh - 125px);

  .slick-slide div {
    outline: none;
  }
`;

const Wrap = styled.div`
  border: none;
  img {
    filter: brightness(50%);
    width: 100%;
    max-height: calc(100vh - 125px);
    border: none;
  }
`;
