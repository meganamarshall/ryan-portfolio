import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  * {
    background-color: rgb(197, 168, 49);
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1; 
    animation-fill-mode: forwards; 
  }
  
  @keyframes fadeInAnimation { 
  0% { 
      opacity: 0; 
  } 
  100% { 
      opacity: 1; 
  } 
  `;

  export default GlobalStyle;
