import React from "react"
import Slider from "react-slick"

import {
  Container,

  // Wrapper, Text
} from "./styles"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
  }
  return (
    <Container>
      <Slider {...settings}>
        <img src="https://i.imgur.com/4zXjmnJ.jpg" alt="slider-1"></img>
        <img src="https://i.imgur.com/E6cN18Q.jpg" alt="slider-2"></img>
        <img src="https://i.imgur.com/LuqEyTk.jpg" alt="slider-3"></img>
      </Slider>
    </Container>
  )
}

export default Carousel
