import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import ThemeContext from '../../store/theme';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import Hamburger from './MobileMenu/Hamburger';
import { Mobile, Tablet, Desktop } from '../../helpers/mediaTemplates';
import MEDIA from '../../helpers/mediaTemplates';

const Background = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  font-weight: 800;
  height: ${({ theme }) => theme.heightHeader};

  ${MEDIA.MOBILE`
    background-color: transparent;
 `};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.width};
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
`;

const HomeLink = styled(Link)`
  width: 18rem;
  ${MEDIA.TABLET`
    padding-left: 5rem;
 `};
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
    <Background theme={theme}>
      <Container theme={theme}>
        <HomeLink to="/">
          <StaticImage
            src="../../../content/images/dogpower-logo.png"
            alt="dog power logo"
            placeholder="blurred"
          />
        </HomeLink>
        <Desktop>
          <Nav />
        </Desktop>
        <Mobile>
          <MobileMenu isMenuOpened={isMenuOpened} onOpenMenu={setMenuOpened} />
          <Hamburger isMenuOpened={isMenuOpened} onOpenMenu={setMenuOpened} />
        </Mobile>
        <Tablet>
          <MobileMenu isMenuOpened={isMenuOpened} onOpenMenu={setMenuOpened} />
          <Hamburger isMenuOpened={isMenuOpened} onOpenMenu={setMenuOpened} />
        </Tablet>
      </Container>
    </Background>
  );
};

export default Header;
