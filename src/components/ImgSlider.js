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
  // border: 1px solid red;
`;

const HeaderText = styled.div`
  position: absolute;
  // border: 2px solid green;
  top: 10vmin;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  width: 100%;
  // padding: 0px 50vw;
  // margin: 0 25vw;
  font-size: 3vmin;
  
  h1 {
    display: flex;
    width: 25%;
    margin: 20px;
    padding: 20px calc(35vw);
  }

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
