import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ThemeContext from '../../store/theme';
import dogpowerLogo from '../../images/dogpower-logo.png';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import Hamburger from './MobileMenu/Hamburger';
import { Mobile, Desktop } from '../../helpers/mediaTemplates';
import MEDIA from '../../helpers/mediaTemplates';

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
      color: ${({ theme }) => theme.linkColor};
      text-decoration: underline;
    }
  }
  ${MEDIA.MOBILE`
    background-color: transparent;
 `};
`;

const Logo = styled.img`
  height: 6rem;
`;

const HomeLink = styled(Link)`
  padding-left: 12rem;

  ${MEDIA.MOBILE`
    padding-left: 2rem;
 `};
`;

const Header = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (isMenuOpened) {
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = 'no';
    } else {
      document.documentElement.style.overflow = 'scroll';
      document.body.scroll = 'yes';
    }
  }, [isMenuOpened]);

  return (
    <Container theme={theme}>
      <HomeLink to="/">
        <Logo src={dogpowerLogo} />
      </HomeLink>
      <Desktop>
        <Nav />
      </Desktop>
      <Mobile>
        <MobileMenu isMenuOpened={isMenuOpened} onOpenMenu={setMenuOpened} />
        <Hamburger isMenuOpened={isMenuOpened} onOpenMenu={setMenuOpened} />
      </Mobile>
    </Container>
  );
};

export default Header;
