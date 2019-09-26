import styled from 'styled-components';

const HeaderStyled = styled.header `
  @media (min-width:300px) and (max-width:722px) {
    display: flex;
    flex-direction: column;
    padding-top: 5vh;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-bottom: 2vh;

      h1 {
        display: flex;
        font-size: 4em;
        justify-content: flex-start;
      }
      h2 {
        display: flex;
        font-size: 2.3em;
        font-family: 'Libre Caslon Display', serif;
        justify-content: flex-end;
        align-items: flex-start;
      }
  }

  @media (min-width:723px) and (max-width:1366px) {
    display: flex;
    flex-direction: row;
    padding-top: 5vh;
    padding-bottom: 3vh;
    justify-content: center;
    align-items: flex-end;

      h1 {
        font-size: 4.9em;
      }

      h2 {
        font-size: 2.3em;
        font-family: 'Libre Caslon Display', serif;
        align-items: flex-end;
        justify-content: flex-end;
      }
  }

  @media (min-width:1367px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding-top: 5vh;
    padding-bottom: 2vh;

    h1 {
      font-size: 6em;
      padding: 20px;
    }

    h2 {
      font-family: 'Libre Caslon Display', serif;
      align-items: flex-end;
      justify-content: flex-end;
      font-size: 2.5em;
    }
  }
  
  font-family: 'Poppins', sans-serif;
  flex-wrap: wrap;

`;

export default HeaderStyled;
