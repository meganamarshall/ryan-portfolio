import styled from 'styled-components';

const FooterStyled = styled.footer `
  @media (min-width:300px) and (max-width:1023px) {
    margin-top: 5vh;
  }

  font-family: 'Poppins', sans-serif;
  height: 7vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 1.5em;
`;

export default FooterStyled;
