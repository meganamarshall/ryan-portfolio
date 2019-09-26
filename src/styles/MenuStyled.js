import styled from 'styled-components';

const MenuStyled = styled.div `
  @media (min-width:300px) and (max-width:767px) {
    h1 {
      margin-top: 1vh;
      margin-bottom: 3vh;
    }
  }
  @media (min-width:768px) and (max-width:1023px) {
    h1 {
      margin-top: 1vh;
      margin-bottom: 10vh;
    }
  }

  @media (min-width:1024px) {
    h1 {
      margin-top: 1vh;
      margin-bottom: 10vh;
    }
  }
  section {
    list-style-type: none;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }

  h1 {
    font-family: 'Libre Caslon Display', serif;
    font-size: 1.7em;
    list-style-type: none;
  }
`;

export default MenuStyled;
