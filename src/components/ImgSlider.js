import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  max-height: calc(100vh - 125px);

  .slick-slide div {
    outline: none;
  }
`;

const Wrap = styled.div`
  border: none;
  img {
    width: 100%;
    max-height: calc(100vh - 125px);
    border: none;
  }
`;
