import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import styled from 'styled-components';

import ArrowIcon from '../../images/angle-right-regular.svg';
import useBoop from './useBoop';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled(ArrowIcon)`
  height: 4rem;
  width: 4rem;
  margin-left: 0.5rem;
`;

const Boop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);

  return (
    <Container onMouseEnter={trigger}>
      {children}
      <animated.span style={style}>
        <Arrow />
      </animated.span>
    </Container>
  );
};

export default Boop;

Boop.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  rotation: PropTypes.number,
  scale: PropTypes.number,
  timing: PropTypes.number,
  children: PropTypes.node,
};
