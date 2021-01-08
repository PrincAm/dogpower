import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Text from '../../Text';

const Container = styled.div`
  padding-right: 12rem;
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 3rem;
      }
    }
  }
`;

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/training">
          <Text>Trénink</Text>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <Text>O mně</Text>
        </Link>
      </li>
      <li>
        <Link to="/service">
          <Text>Ceník</Text>
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
