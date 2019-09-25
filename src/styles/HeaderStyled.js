import styled from 'styled-components';

const HeaderStyled = styled.header `
  @media (min-width:360px) and (max-width:414px) {
    display: flex;
    align-items: flex-end;
    flex-direction: column;

      h1 {
        font-size: 4em;
      }
      h2 {
        font-size: 2.3em;
        font-family: 'Libre Caslon Display', serif;
      }
  }
  @media (min-width:1024px) and (max-width:1366px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 1em;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      font-size: .6em;
      font-family: 'Libre Caslon Display', serif;
    }
  }

  @media (min-width:1367px) {
    h2 {
      font-family: 'Libre Caslon Display', serif;
      align-items: flex-end;
      justify-content: flex-end;
      font-size: .6em;
    }
  }

  @media (min-width:768px) and (max-width:1023px) {
    h2 {
      font-size: .6em;
      font-family: 'Libre Caslon Display', serif;
    }
  }

  @media (min-width:1024px) {
    h1 {
      font-size: 5em;
    }
  }
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  font-family: 'Poppins', sans-serif;
  flex-wrap: wrap;
  padding: 20px;

`;

export default HeaderStyled;
