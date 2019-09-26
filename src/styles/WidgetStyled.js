import styled from 'styled-components';


const WidgetStyled = styled.section `
  @media (min-width:300px) and (max-width:1023px) {
    iframe {
     margin-top: 10vh;
     width: 90vw;
     height: 400px;
    }
  }
  
  @media (min-width:1024px) {
    margin-top: 1vh;

    iframe {
      margin-top: 10vh;
      width: 90vw;
      height: 400px;
     }
  }


  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  border: none;
`;

export default WidgetStyled;
