import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Text from '../../Text';

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
        <Link to="/training">
          <Text>Výchova a trénink</Text>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <Text>O mně</Text>
        </Link>
      </li>
      <li>
        <Link to="/service">
          <Text>Služby</Text>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <Text>Kontakt</Text>
        </Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
