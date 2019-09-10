import styled from 'styled-components';

const HeaderStyled = styled.header `
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  font-family: 'Playfair Display', serif;
  flex-wrap: wrap;
  font-size: 3em;

  h2 {
    font-family: 'Open Sans Condensed', sans-serif;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: .7em;
  }
`;

export default HeaderStyled;
