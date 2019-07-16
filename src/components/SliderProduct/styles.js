import styled from "styled-components"
import sizes from "../../styles/media"

export const ImgContainer = styled.div`
  border: solid 1px #d9d9d9;
`

export const Img = styled.img`
  width: 100%;
`

export const ImgPrev = styled.img`
  width: 50px;
  @media ${sizes.lg} {
    width: 75px;
  }
`

export const ImgLink = styled.a`
  cursor: pointer;
`

export const ImgPrevContainer = styled.div`
  margin: 0 5px;
  @media ${sizes.sm} {
    margin: 0 7.5px;
  }
`

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: center;
`

export const DotsContainer = styled.div`
  margin-top: 15px;
  position: static;
`

export const SliderContainer = styled.div`
  .slick-next:before,
  .slick-prev:before {
    color: black;
    position: absolute;
  }
  .slick-prev,
  .slick-next {
    z-index: 1;
  }
  .slick-next:before {
    left: -15px;
  }
  .slick-prev:before {
    right: -15px;
  }
`
