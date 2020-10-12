import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  padding-right: 4rem;
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/training">Výchova a výcvik</Link>
      </li>
      <li>
        <Link to="/contact">Kontakt</Link>
      </li>
      <li>
        <Link to="/contact">Kontakt 2</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
