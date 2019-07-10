import styled from "styled-components"

export const ItemContainerResponsive = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: minmax(min-content, max-content);
`
export const Title = styled.h4`
  text-align: center;
`
