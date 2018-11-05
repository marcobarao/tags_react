import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  body {
    font-family: "Ubuntu", cursive;
    font-size: 30px;
    background-color: var(--color-third);
    color: var(--color-second);
  }
`;

export default Base;
