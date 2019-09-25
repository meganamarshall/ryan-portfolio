import styled from 'styled-components';

const ContactStyled = styled.div `
  .contact {
    font-size: 1.7em;
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
`;

export default ContactStyled;
