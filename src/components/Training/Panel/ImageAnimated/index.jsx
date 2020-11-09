import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSpring, a } from 'react-spring';
import Img from 'gatsby-image';

const ImgStyled = styled(Img)`
  flex-shrink: 0;
  height: 500px;
  width: 500px;
`;

const Image = ({
  isVisible,
  imageFluid,
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

  return (
    <a.div style={props}>
      <ImgStyled fluid={imageFluid} />
    </a.div>
  );
};

export default Image;
