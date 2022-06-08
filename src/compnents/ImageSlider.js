import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider(props) {
  let settings = {
    dot: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scales.jpg" alt="" />
          </a>
        </Wrap>
      </Carousel>
    </div>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  a {
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    padding: 4px;
    display: block;

    box-shadow: rgb(0 0 0 / 70%) 0px 30px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid #f9f9f9;
      transform: scale(1.01);
      transition: all 0.3s ease 0.05s;
    }
  }
`;
