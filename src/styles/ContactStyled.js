import styled from 'styled-components';

const ContactStyled = styled.div `
  @media (min-width:300px) and (max-width:640px) {
      font-size: 1.2 em; 
  }

  @media (min-width:641px) {
    font-size: 1.7em;
  }

  .contact {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  
  a {
    text-decoration: none;
    padding: 2vh;
  }

  a:link {
    color: black;
  }

  a:hover {
    color: #19647E;
  }

  margin-top: 1vh;
  margin-bottom: 7vh;

`;

export default ContactStyled;
