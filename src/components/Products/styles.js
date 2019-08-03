import styled from "styled-components"
import media from "../../styles/media"
import Select from "react-select"

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
  min-height: 60vh;
  ${media.sm`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    grid-auto-rows: minmax(min-content, max-content);  
    min-height: 40vh;
  `};
`

export const StyledSelect = styled(Select)`
  width: 100%;
  margin-bottom: 1rem;
  ${media.sm`
    width: 320px;  
    margin-bottom: 0;  
  `};
`

export const HeadContainer = styled.div`
  margin-bottom: 0;
  ${media.sm`
  margin-bottom: 1rem;
  `};
`
