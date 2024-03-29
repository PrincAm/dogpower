import React, { useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  config,
} from 'react-spring';

import SocialMedias from './SocialMedias';
import PhoneNumber from './PhoneNumber';
import ThemeContext from '../../../store/theme';
import MEDIA from '../../../helpers/mediaTemplates';

const Nav = styled(animated.nav)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 0;
  left: 0;
  height: 100vh;
  padding-top: 1.6rem;
  color: ${({ theme }) => theme.colorSecondary};
  background-color: ${({ theme }) => theme.color};
  font-size: 5rem;
  line-height: 5.7rem;

  ul {
    margin: 0;
    padding: 0;
  }
  ${MEDIA.TABLET`
    font-size: 8rem;
    line-height: 9rem;
 `};
  ${MEDIA.MOBILE`
    font-size: 5rem;
    line-height: 5.7rem;
 `};
`;

const Li = styled(animated.li)`
  list-style: none;
  margin-left: 2rem;
  ${MEDIA.TABLET`
    margin-left: 5rem;
 `};
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-shadow: none;
  margin-top: 5rem;
`;

const menuItems = [
  {
    id: 'home',
    title: 'Home',
    link: '',
  },
  {
    id: 'training',
    title: 'Trénink',
    link: 'trenink',
  },
  {
    id: 'o-mne',
    title: 'O mně',
    link: 'o-mne',
  },
  {
    id: 'media',
    title: 'Média',
    link: 'media',
  },
  {
    id: 'cenik',
    title: 'Ceník',
    link: 'cenik',
  },
  {
    id: 'reference',
    title: 'Reference',
    link: 'reference',
  },
  {
    id: 'kontakt',
    title: 'Kontakt',
    link: 'kontakt',
  },
];

const icons = [
  {
    name: 'phone',
    component: <PhoneNumber />,
  },
  {
    name: 'socialMedia',
    component: <SocialMedias />,
  },
];

const MobileMenu = ({ isMenuOpened = false, onOpenMenu }) => {
  const theme = useContext(ThemeContext);
  const navRef = useRef();
  const liRef = useRef();
  const iconsRef = useRef();

  const springProps = useSpring({
    ref: navRef,
    config: config.default,
    from: { width: '0%' },
    to: { width: isMenuOpened ? '100%' : '0%' },
  });

  const liTransitions = useTransition(
    isMenuOpened ? menuItems : [],
    item => item.id,
    {
      ref: liRef,
      trail: 400 / menuItems.length,
      from: { opacity: 0, transform: 'translateY(20px)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(20px)' },
    }
  );

  const iconsTransition = useTransition(
    isMenuOpened ? icons : [],
    item => item.name,
    {
      ref: iconsRef,
      trail: 400 / icons.length,
      from: { opacity: 0, transform: 'translateY(20px)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(20px)' },
    }
  );

  useChain(isMenuOpened ? [navRef, liRef] : [liRef, navRef], [
    0,
    isMenuOpened ? 0.4 : 0.6,
  ]);

  useChain(isMenuOpened ? [navRef, iconsRef] : [iconsRef, navRef], [
    0,
    isMenuOpened ? 0.4 : 0.6,
  ]);

  return (
    <Nav className="menu" style={springProps} theme={theme}>
      <ul>
        {liTransitions.map(({ item, key, props }) => (
          <Li key={key} style={props}>
            <Link to={`/${item.link}`} onClick={() => onOpenMenu(false)}>
              {item.title}
            </Link>
          </Li>
        ))}
      </ul>
      <IconsContainer>
        {iconsTransition.map(({ item, key, props }) => (
          <animated.div key={key} style={props}>
            {item.component}
          </animated.div>
        ))}
      </IconsContainer>
    </Nav>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  onOpenMenu: PropTypes.func,
  isMenuOpened: PropTypes.bool,
};
