import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSpring, a } from 'react-spring';

const AnimatedContainer = styled(a.div)`
  max-width: 500px;
  font-size: 3rem;
  line-height: 4.2rem;
`;

const TextAnimated = ({
  isVisible,
  children,
  translateYFrom = '20px',
  translateYTo = '-20px',
}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  useEffect(() => {
    if (!isDisplayed && isVisible) {
      setIsDisplayed(true);
    }
  }, [isVisible]);
  const props = useSpring({
    config: { mass: 5, tension: 1000, friction: 500 },
    opacity: isDisplayed ? 1 : 0,
    transform: isDisplayed
      ? `translate3d(0,${translateYTo},0)`
      : `translate3d(0,${translateYFrom},0)`,
  });

  return <AnimatedContainer style={props}>{children}</AnimatedContainer>;
};

export default TextAnimated;
