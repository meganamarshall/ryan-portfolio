import styled from 'styled-components';

const PressStyled = styled.section `
@media (min-width:768px) and (max-width:1023px) {
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 0vh;
  
  .attribution {
    margin-bottom: 1.5vh;
  }
  .text-p {
    margin-bottom: .5vh;
  }
}

@media (min-width:1024px) and (max-width:1366px) {
  .attribution {
    margin-bottom: 1.5vh;
  }
  .text-p {
    margin-bottom: .5vh;
  }
}

@media (min-width:1367px) {
  .text-p {
    margin-bottom: 3vh;
  }
}
  margin-left: 10vw;
  margin-right: 10vw;

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

`;

export default PressStyled;
