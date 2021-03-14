import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

import AngleRightIcon from '../../images/angle-right-regular.svg';
import AngleDownIcon from '../../images/angle-down-regular.svg';
import AngleUpIcon from '../../images/angle-up-regular.svg';
import useBoop from './useBoop';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const smallAngleStyles = css`
  height: 2.5rem;
  width: 2.5rem;
`;

const AngleRight = styled(AngleRightIcon)`
  height: 4rem;
  width: 4rem;
  margin-left: 0.5rem;
`;

const AngleDown = styled(AngleDownIcon)`
  ${smallAngleStyles}
`;

const AngleUp = styled(AngleUpIcon)`
  ${smallAngleStyles}
`;

const Boop = ({ children, direction = 'right', ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);

  return (
    <Container onMouseEnter={trigger}>
      {children}
      <animated.span style={style}>
        {direction === 'right' && <AngleRight />}
        {direction === 'down' && <AngleDown />}
        {direction === 'up' && <AngleUp />}
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
  direction: PropTypes.string,
};
