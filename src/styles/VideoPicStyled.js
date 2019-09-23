import styled from 'styled-components';

const VideoPicStyled = styled.div `
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    
    img {
      height: 50vh;
      margin: 10px;
    }
    iframe {
      height: 50vh;
      width: 35vw;
      margin: 10px;
    }
  `;

export default VideoPicStyled;
