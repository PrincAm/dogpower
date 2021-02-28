import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HamburgerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  margin: 2.3rem 2rem 0 0;
`;
const Bar = styled.div`
  position: relative;
  width: 4rem;
  height: 0.4rem;
  background-color: #f7f7f7;
  margin-bottom: 0.7rem;
  transition: 0.5s;
`;

const FirstBar = styled(Bar)`
    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? 'rotate(-45deg) translate(-0.92rem, 0.65rem)' : 'none'};
  }
`;

const SecondBar = styled(Bar)`
  opacity: ${({ isMenuOpened }) => (isMenuOpened ? 0 : 1)};
`;

const ThirdBar = styled(Bar)`
  transform: ${({ isMenuOpened }) =>
    isMenuOpened ? 'rotate(45deg) translate(-0.94rem, -0.6rem)' : 'none'};
`;

const Hamburger = ({ onOpenMenu, isMenuOpened }) => {
  return (
    <HamburgerContainer onClick={() => onOpenMenu(!isMenuOpened)}>
      <FirstBar isMenuOpened={isMenuOpened} />
      <SecondBar isMenuOpened={isMenuOpened} />
      <ThirdBar isMenuOpened={isMenuOpened} />
    </HamburgerContainer>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  onOpenMenu: PropTypes.func.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,
};
