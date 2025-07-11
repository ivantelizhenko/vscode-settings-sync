// import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  line-height: 1.5;
  /* need to try */
  /* line-height: calc(1em + 0.5rem); */

  -webkit-font-smoothing: antialiased;
  font-size: 1.6rem;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

p {
  text-wrap: pretty;
  hyphens: auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

#root,
#__next {
  isolation: isolate;
}
`;
