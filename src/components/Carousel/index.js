import React from "react"
import Slider from "react-slick"

import {
  Container,
  ImgContainer,
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  }
  return (
    <Container>
      <Slider {...settings}>
        <ImgContainer img={slider1} alt="slider-1"></ImgContainer>
        <ImgContainer img={slider2} alt="slider-2"></ImgContainer>
        <ImgContainer img={slider3} alt="slider-3"></ImgContainer>
      </Slider>
    </Container>
  )
}

export default Carousel
