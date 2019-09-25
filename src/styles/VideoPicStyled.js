import styled from 'styled-components';

const VideoPicStyled = styled.div `
  @media (min-width:1367px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 10vh;
  
    img {
      height: 325px;
    }

    iframe {
      height: 325px;
      width: 578px;
    }
  }
  @media (min-width:1024px) and (max-width:1366px) {
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-left: 10vw;
    margin-right: 10vw;

    img {
      height: 300px;
    }

    iframe {
      height: 300px;
      width: 533px;
    }
  }

  @media (min-width:768px) and (max-width:1023px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 5vh;
  
    img {
      height: 200px;
    }

    iframe {
      height: 200px;
      width: 356px;
    }
  }

  @media (min-width:360px) and (max-width:414px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 330px;
      margin-top: 2vh;
    }

    iframe {
      width: 330px;
      height: 186px;
    }
  }
  `;

export default VideoPicStyled;
