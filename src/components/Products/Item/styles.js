import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 4px 0 rgba(137, 137, 137, 0.3);
  outline: 1px solid transparent;
  padding: 1rem 1rem 2rem 1rem;
  border: 2px solid transparent;
  background-color: white;
  &:hover {
    border: 2px solid ${props => props.colors && props.colors.secondary};
  }
`
export const ImageResponsive = styled.img`
  max-width: 100%;
  height: 135px;
`
