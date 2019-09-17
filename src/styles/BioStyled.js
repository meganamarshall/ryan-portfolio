import styled from 'styled-components';

const BioStyled = styled.section `
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text-p {
    font-family: 'Libre Caslon Display', serif;
    font-size: 1.3em;
    margin-top: 30px;
  }

  img {
    border-radius: 5px;
    height: 40vh;
    width: auto;
    float: right;
    margin-top: 30px;
  }
`;

export default BioStyled;
