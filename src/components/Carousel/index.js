import React from "react"
import Slider from "react-slick"

import {
  Container,

  // Wrapper, Text
} from "./styles"

import slider1 from "../../assets/banner/BANNER1.jpg"
import slider2 from "../../assets/banner/BANNER2.jpg"
import slider3 from "../../assets/banner/BANNER3.jpg"

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
        <img src={slider1} alt="slider-1"></img>
        <img src={slider2} alt="slider-2"></img>
        <img src={slider3} alt="slider-3"></img>
      </Slider>
    </Container>
  )
}

export default Carousel
