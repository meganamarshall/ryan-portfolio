import styled from 'styled-components';

const BioStyled = styled.section `
@media (min-width:359px) and (max-width:415px) {
   
}

@media (min-width:1024px) and (max-width:1366px) {
  .text-p {
    margin-bottom: 1vh;
  }
}
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10vw;
  margin-right: 10vw;

  .text-p {
    font-family: 'Libre Caslon Display', serif;
    font-size: 1.3em;
    margin-bottom: 3vh;
  }

  @media (min-width:768px) and (max-width:1023px) {
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;

export default BioStyled;
