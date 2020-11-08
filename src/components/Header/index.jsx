import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ThemeContext from '../../store/theme';
import Nav from './Nav';

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  font-weight: 800;
  height: ${({ theme }) => theme.heightHeader};

  a {
    color: ${({ theme }) => theme.colorSecondary};
    font-weight: 600;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

const CompanyName = styled.h1`
  font-weight: 500;
  font-size: 3rem;
`;

const HomeLink = styled(Link)`
  padding-left: 10rem;
`;

const Header = ({ title }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <HomeLink to="/">
        <CompanyName>{title}</CompanyName>
      </HomeLink>

      <Nav />
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
