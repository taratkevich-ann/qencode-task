import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --red-color: #bf0101;
  --light-grey-color: #bec5cc;
  --grey-color: #a1abb5;
  --blue-color: #316fea;
  --white-color: #fff;
  --black-color: #1a1919;
  --sm-border-radius: 6px;
  --md-border-radius: 8px;
}

@font-face {
  font-family: "Basis Grotesque Pro";
  src: url("/fonts/BasisGrotesquePro-Regular.eot");
  src: url("/fonts/BasisGrotesquePro-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("/fonts/BasisGrotesquePro-Regular.woff2") format("woff2"),
    url("/fonts/BasisGrotesquePro-Regular.woff") format("woff"),
    url("/fonts/BasisGrotesquePro-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Basis Grotesque Pro";
  src: url("/fonts/");
  src: url("/fonts/?#iefix") format("embedded-opentype"),
    url("/fonts/BasisGrotesquePro-Medium.woff2") format("woff2"),
    url("/fonts/BasisGrotesquePro-Medium.woff") format("woff"),
    url("/fonts/BasisGrotesquePro-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Basis Grotesque Pro";
  src: url("/fonts/");
  src: url("/fonts/?#iefix") format("embedded-opentype"),
    url("/fonts/BasisGrotesquePro-Bold.woff2") format("woff2"),
    url("/fonts/BasisGrotesquePro-Bold.woff") format("woff"),
    url("/fonts/BasisGrotesquePro-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Basis Grotesque Pro", Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: var(--black-color);
}

a {
  color: var(--blue-color);
  text-decoration: inherit;
}

button {
  font-family: inherit;
  cursor: pointer;
}

@media screen and (max-width: 471px) {
  body {
    font-style: 14px;
  }
}
`;

export default GlobalStyles;
