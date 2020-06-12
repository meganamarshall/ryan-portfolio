import styled from 'styled-components';

const BioStyled = styled.section `
  @media (min-width:300px) and (max-width:1023px) {
    margin-bottom: 3vh;
    margin-top: 3vh;
  }

  @media (min-width:1024px) and (max-width:1366px) {
    .text-p {
    margin-bottom: 1vh;
    margin-top: 3vh;
    }
  } 

  ul {
    list-style-type: none;
    padding: none;
  }
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 3vh;

  .text-p {
    font-family: 'Libre Caslon Display', serif;
    font-size: 1.3em;
    margin-bottom: 3vh;
  }
`;

export default BioStyled;
