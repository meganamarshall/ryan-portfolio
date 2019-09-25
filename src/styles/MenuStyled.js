import styled from 'styled-components';

const MenuStyled = styled.div `
@media (min-width:768px) and (max-width:1023px) {
  h1 {
    margin-top: 1vh;
    margin-bottom: 1vh;
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
    margin-top: 7vh;
    margin-bottom: 5vh;
  }
`;

export default MenuStyled;
