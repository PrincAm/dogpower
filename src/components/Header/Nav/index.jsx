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
      font-size: 1.3rem;

      & + li {
        margin-left: 3rem;
      }
    }
  }
`;

const Bold = styled.span`
  transition: color 0.5s ease;

  &:hover {
    color: #4f868e;
  }
`;

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/trenink">
          <Text>
            <Bold>Trénink</Bold>
          </Text>
        </Link>
      </li>
      <li>
        <Link to="/o-mne">
          <Text>
            <Bold>O mně</Bold>
          </Text>
        </Link>
      </li>
      <li>
        <Link to="/cenik">
          <Text>
            <Bold>Ceník</Bold>
          </Text>
        </Link>
      </li>
      <li>
        <Link to="/kontakt">
          <Text>
            <Bold>Kontakt</Bold>
          </Text>
        </Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
