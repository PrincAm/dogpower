import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Title from 'components/title';
import Nav from 'components/header/nav';

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
  background-color: #1a1a2e;
  opacity: 0.9;

  a {
    color: #fff;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

const HomeLink = styled(Link)`
  padding-left: 10rem;
`;

const Header = ({ title }) => (
  <Container>
    <HomeLink to="/">
      <Title as="h1" size="large">
        {title}
      </Title>
    </HomeLink>

    <Nav />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
