import React from "react"
import Slider from "react-slick"

import { Container, ImgContainer, Wrapper, Text } from "./styles"

import slider1 from "../../assets/slider/slider-1.png"
import slider2 from "../../assets/slider/slider-2.png"
import slider3 from "../../assets/slider/slider-3.png"

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
        <ImgContainer img={slider1} alt="slider-1">
          <Wrapper>
            <Text>Insert Text Here</Text>
          </Wrapper>
        </ImgContainer>
        <ImgContainer img={slider2} alt="slider-2">
          <Wrapper>
            <Text>Insert Text Here</Text>
          </Wrapper>
        </ImgContainer>
        <ImgContainer img={slider3} alt="slider-3">
          <Wrapper>
            <Text>Insert Text Here</Text>
          </Wrapper>
        </ImgContainer>
      </Slider>
    </Container>
  )
}

export default Carousel
