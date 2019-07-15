import styled from "styled-components"
import media from "../../styles/media"

export const ItemContainerResponsive = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: minmax(min-content, max-content);
  ${media.sm`
    display: none;
  `};
`
export const Title = styled.h4`
  text-align: center;
  font-size: 0.75rem;
`

export const ItemContainer = styled.div`
  display: none;
  ${media.sm`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.75rem;
    grid-auto-rows: minmax(min-content, max-content);  
  `};
`
