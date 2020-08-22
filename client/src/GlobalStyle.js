import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --header-blue: #23a6d5;
  --header-turquoise: #23d5ab;
  --highlight-color: #d52391;
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  font-family: "Rubik", sans-serif;
}
a {
  text-decoration: none;
}

h1 {
  font-family: "Kalam", cursive;
  font-size: 5em;
  text-transform: uppercase;
  margin: 0;
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 4rem;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 3rem;
  }
}

/* utilidades */

.flex-column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-center {
  text-align: center;
}

.highlight {
  color: var(--highlight-color);
}

.section {
  margin: 0 auto;
  width: 90%;
}

.section-title {
  font-size: 2em;
  text-transform: uppercase;
  font-weight: lighter;
  position: relative;
}
.section-title::after {
  content: "";
  background-color: gray;
  height: 1px;
  display: block;
  position: absolute;
  top: 120%;
  left: 37%;
  right: 37%;
  width: auto;
}

.margin-bottom {
  margin-bottom: 3em;
}
`;

export default GlobalStyle;
