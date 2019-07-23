import styled from "styled-components"
import media from "../../styles/media"

export const ImgContainer = styled.div`
  background-image: url('${props => props.img}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 190px;
  ${media.sm`
    height: 380px;
  `};
`
export const Wrapper = styled.div`
  display: none;
  ${media.sm`
    display: flex;
    height: 100%;
    align-items: center;
    width: 50%;
    padding-left: 100px;
  `};
`

export const Text = styled.span`
  color: white;
  ${media.sm`
    font-size: 25px;  
  `};
`

export const Container = styled.div`
  padding: 1rem 0;
`
