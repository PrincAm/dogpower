import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/training">Výchova a výcvik</Link>
      </li>
      <li>
        <Link to="/contact">Kontakt</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
