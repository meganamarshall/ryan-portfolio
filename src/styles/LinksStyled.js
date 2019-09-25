import styled from 'styled-components';

const LinksStyled = styled.div `
  @media (min-width:1024px) {
    li {
      margin: 3vh;
    }
  }
  @media (min-width:767px) and (max-width:1023px) {
    li {
      margin: 1vh;
    }
  }
  @media (min-width:359px) and (max-width:415px) {
    li {
      margin: 1vh;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    animation: fadeInAnimation ease 2s;
    animation-iteration-count: 1; 
    animation-fill-mode: forwards; 
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
