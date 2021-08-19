import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, a } from 'react-spring';

const AnimatedContainer = styled(a.div)`
  max-width: 500px; // needs to be px
  font-size: 3rem;
  line-height: 4.2rem;
`;

const TextAnimated = ({
  isVisible,
  children,
  translateYFrom,
  translateYTo,
}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (!isDisplayed && isVisible) {
      setIsDisplayed(true);
    }
  }, [isVisible, isDisplayed]);

  const props = useSpring({
    config: { mass: 15, tension: 200, friction: 100 },
    opacity: isDisplayed ? 1 : 0,
    transform: isDisplayed
      ? `translate3d(0,${translateYTo},0)`
      : `translate3d(0,${translateYFrom},0)`,
  });

  return <AnimatedContainer style={props}>{children}</AnimatedContainer>;
};

export default TextAnimated;

TextAnimated.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node,
  translateYFrom: PropTypes.string,
  translateYTo: PropTypes.string,
};
