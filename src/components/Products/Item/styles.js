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
  margin: 1rem 0;
  min-height: 6rem;
  &:hover {
    outline: 0px solid transparent;
    border: 2px solid ${props => props.colors && props.colors.secondary};
    cursor: pointer;
  }
`
