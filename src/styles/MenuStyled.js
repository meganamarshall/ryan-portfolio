import styled from 'styled-components';

const MenuStyled = styled.ul `
  list-style-type: none;
  display: flex;
  justify-content: space-around; 
  flex-direction: column; 
  align-items: center;
  font-family: 'Playfair Display', serif;
  
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content {
    font-family: 'Open Sans Condensed', sans-serif;
  }
`;

export default MenuStyled;
