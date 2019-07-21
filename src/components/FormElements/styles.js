import styled from "styled-components"

export const StyledInput = styled.input`
  border-radius: 2px;
  width: 100%;
  height: 40px;
  margin: 1rem 0;
  padding: 0.75rem;
  outline: none;

  ${({ backgroundColor, borderColor, error }) => {
    return ` 
      background-color: ${backgroundColor ? backgroundColor : "#ffffff"} ;
      border: solid 1px ${error ? "red" : "#d9d9d9"};
      &:focus{
        border: solid 1px  ${error ? "red" : borderColor};
      }
    `
  }}
`

export const StyledTextArea = styled.textarea`
  border-radius: 2px;
  width: 100%;
  height: 40px;
  margin: 1rem 0;
  padding: 0.75rem;
  outline: none;
  height: 100px;
  ${({ backgroundColor, borderColor, error }) => {
    return ` 
      background-color: ${backgroundColor ? backgroundColor : "#ffffff"} ;
      border: solid 1px ${error ? "red" : "#d9d9d9"};
      &:focus{
        border: solid 1px  ${error ? "red" : borderColor};
      }
    `
  }}
`
