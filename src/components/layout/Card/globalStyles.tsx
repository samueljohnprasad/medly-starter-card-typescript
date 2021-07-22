import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  #root,
  body {
    height: 100%;
    min-height: 100vh;
  }
  body {
    font-family:'Mada', sans-serif;
    font-size: 100%;
    line-height: 1.5;
    color: 'red';
    background-color: #eeee;
    overflow-y: auto;
    overflow-x: auto;
    scroll-behavior: smooth;
    transition: all 0.45s ease;
  }
  ::selection {
    background-color: 'rgba(0, 0, 0, 0.1)';
  }
  button {
    padding: 0;
    border: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;
