import styled from 'styled-components';


const WidgetStyled = styled.section `
  @media (min-width:1024px) and (max-width:1366px) {
    margin-top: 1vh;
  }

  @media (min-width:360px) and (max-width:414px) {
    margin-top: 2vh;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  align-content: center;
  overflow: hidden;
  border: 0px;
`;

export default WidgetStyled;
