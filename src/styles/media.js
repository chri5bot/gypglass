import { css } from "styled-components"

const sizes = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
}

export default Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
