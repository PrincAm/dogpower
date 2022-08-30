import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
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
        <Link to="/trenink">Trénink</Link>
      </li>
      <li>
        <Link to="/o-mne">O mně</Link>
      </li>
      <li>
        <Link to="/media">Média</Link>
      </li>
      <li>
        <Link to="/cenik">Ceník</Link>
      </li>
      <li>
        <Link to="/kontakt">Kontakt</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
