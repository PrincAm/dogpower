import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Title from 'components/title';
import Nav from 'components/header/nav';

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
  background-color: #1a1a2e;
  opacity: 0.9;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

const HomeLink = styled(Link)`
  padding-left: 4rem;
`;

const Header = ({ title }) => (
  <Container>
    <HomeLink to="/">
      <Title as="h1">{title}</Title>
    </HomeLink>

    <Nav />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
