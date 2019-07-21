import React from "react"
import { StyledInput, StyledTextArea } from "./styles"

export const Input = ({
  label,
  required,
  error,
  backgroundColor,
  borderColor,
  ...props
}) => (
  <>
    <label>
      {required && "*"} {label}
    </label>
    <StyledInput
      {...props}
      error={error}
      required={required}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    ></StyledInput>
  </>
)

export const TextArea = ({
  label,
  required,
  error,
  backgroundColor,
  borderColor,
  ...props
}) => (
  <>
    <label>
      {required && "*"} {label}
    </label>
    <StyledTextArea
      {...props}
      error={error}
      required={required}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    ></StyledTextArea>
  </>
)
