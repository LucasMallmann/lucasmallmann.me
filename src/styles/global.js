import { css, createGlobalStyle } from 'styled-components';

const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  a {
    text-decoration: none;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: 'Lato', sans-serif;
    /* font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-size: 10px;
  }
  body {
    font-size: 2rem;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  ::selection {
    background: #f5f5f5;
  }
  ::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f5f5f5;
    border-radius: 1.5rem;
  }
  body,
  input,
  button,
  p {
    color: ${(props) => props.theme.colors.text};
  }
`;

export default createGlobalStyle(styles);
