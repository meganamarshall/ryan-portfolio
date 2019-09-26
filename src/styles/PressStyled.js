import styled from 'styled-components';

const PressStyled = styled.section `
@media (min-width:300px) and (max-width:1023px) {
  .attribution {
    margin-bottom: 5vh;
  }

  .text-p {
    margin-bottom: 1vh;
  }
}

@media (min-width:1024px) and (max-width:1366px) {
  .attribution {
    margin-bottom: 5vh;
  }

  .text-p {
    margin-bottom: 2vh;
  }
}

@media (min-width:1367px) {
  .attribution {
    margin-bottom: 5vh;
  }

  .text-p {
    margin-bottom: 2vh;
  }
}

  .text-p {
    font-family: 'Libre Caslon Display', serif;
    font-size: 1.3em;
  }

  .attribution {
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    font-size: 1.1em;
    margin-top: 5px;
    margin-left: 20px;
  }

  ul {
    list-style-type: none;
    padding: none;
  }

  margin-left: 10vw;
  margin-right: 10vw;
`;

export default PressStyled;
