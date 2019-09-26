import styled from 'styled-components';

const VideoPicStyled = styled.div `
  @media (min-width:300px) and (max-width:359px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 300px;
      margin-top: 7vh;
    }

    iframe {
      width: 300px;
      height: 169px;
    }
  }

  @media (min-width:360px) and (max-width:767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 330px;
      margin-top: 7vh;
    }

    iframe {
      width: 330px;
      height: 186px;
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
    margin-top: 1vh;
  
    img {
      height: 250px;
    }

    iframe {
      height: 250px;
      width: 444px;
    }
  }

  @media (min-width:1024px) {
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

  @media (min-width:1250px) {
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 10vh;
  
    img {
      height: 350px;
    }

    iframe {
      height: 350px;
      width: 622px;
    }
  }

  @media (min-width:1525px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 3vh;
  
    img {
      height: 450px;
    }

    iframe {
      height: 450px;
      width: 800px;
    }
  }
  `;

export default VideoPicStyled;
