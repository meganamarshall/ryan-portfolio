import styled from 'styled-components';

const LinksStyled = styled.div `
  @media (min-width:300px) and (max-width:1023px) {
    li {
      margin: 1vh;
      border-radius: 3px;
    }
  }

  @media (min-width:1024px) {
    li {
      margin: 3vh;
      border-radius: 3px;
    }
  }
  

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1; 
    animation-fill-mode: forwards; 
    padding: none;
  }

@keyframes fadeInAnimation { 
  0% { 
      opacity: 0; 
  } 
  50% {
    opacity: 0;
  }
  100% { 
      opacity: 1; 
   } 
  }
}
`;

export default LinksStyled;
