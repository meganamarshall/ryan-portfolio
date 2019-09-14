import styled from 'styled-components';

const LinksStyled = styled.ul `
  p {
    display: flex;
    flex-wrap: wrap;
    flex-direction: flex-column;
  }

  section {
    display: flex;
    flex-direction: flex-row;
  }

  .one-link {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  img {
    height: 100px;
  }

  a {
    text-decoration: none;
    font-family: 'Libre Caslon Display', serif;
  }
`;

export default LinksStyled;
