import { createGlobalStyle } from "styled-components";

const Settings = createGlobalStyle`
  :root {
    --color-zero: #fff;
    --color-first: #5B74E0;
    --color-second: #3a4042;
    --color-second-light: rgba(58, 64, 66, 0.4);
    --color-third: #fffcee;
    --spacing-small: 6px;
    --spacing-medium: 30px;
    --spacing-big: 45px;
  }
`;

export default Settings;
