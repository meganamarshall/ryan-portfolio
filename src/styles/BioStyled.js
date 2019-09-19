import styled from 'styled-components';

const BioStyled = styled.section `
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  margin-left: 10vw;
  margin-right: 10vw;

  .text-p {
    font-family: 'Libre Caslon Display', serif;
    font-size: 1.3em;
    margin-top: 3vh;
  }

  img {
    border-radius: 5px;
    height: 40vh;
    width: auto;
    float: right;
    margin: 3vh;
  }
`;

export default BioStyled;
