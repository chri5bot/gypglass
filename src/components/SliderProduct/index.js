import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { ImgContainer, Img, SliderContainer } from "./styles"

function SliderProduct({ slug, image }) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
        },
      },
    ],
  }
  return (
    <SliderContainer>
      <Slider {...settings}>
        <ImgContainer>
          <Img src={image} alt={slug} />
        </ImgContainer>
      </Slider>
    </SliderContainer>
  )
}

export default SliderProduct
