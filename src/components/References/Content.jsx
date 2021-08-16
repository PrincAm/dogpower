import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMeasure } from 'react-use';
import styled from 'styled-components';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { useSpring, animated } from 'react-spring';

import Text from '../Text';
import Boop from '../Boop';
import ThemeContext from '../../store/theme';

const Container = styled(animated.div)`
  padding: 3rem;
  margin: 2rem 5rem 8rem 5rem;
  transition-property: box-shadow, transform;
  transition-duration: 1s, 1s;
  overflow: hidden;
  position: relative;
  border-radius: 10px;

  &::after {
    content: '';
    height: 5rem;
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(238, 238, 238, 0) 0%,
      rgba(238, 238, 238, 0.85) 100%
    );
    position: absolute;
    bottom: 0;
    left: -0.1rem;
  }
`;

const ImageWrapper = styled.div`
  display: block;
  float: left;
  max-width: 19.2rem;
  max-height: 19.2rem;
  margin-right: 2rem;
`;

const Name = styled(Text)`
  font-weight: 600;
`;

const Paragraph = styled(Text)`
  margin-bottom: 0;
`;

const MoreButton = styled(animated.button)`
  position: relative;
  bottom: 9rem;
  right: 50px;
  font-size: 1.5rem;
  float: right;
  cursor: pointer;
  background: ${({ theme }) => theme.linkColor};
  height: 5rem;
  width: 5rem;
  border-radius: 10rem;
  display: block;
  color: ${({ theme }) => theme.background};
  border: none;

  &:focus {
    outline: none;
  }
`;

const defaultHeight = '200px';

const Content = ({ text, name, image, isExpanded, onExpand }) => {
  const imageSharp = getImage(image);
  const [contentHeight, setContentHeight] = useState(defaultHeight);
  const [ref, { height }] = useMeasure();
  const theme = useContext(ThemeContext);
  const expand = useSpring({
    config: { friction: 12 },
    height: isExpanded ? `${contentHeight}px` : defaultHeight,
  });
  const spin = useSpring({
    config: { friction: 12 },
    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
  });

  useEffect(() => {
    //Sets initial height
    setContentHeight(height);

    //Adds resize event listener
    window.addEventListener('resize', setContentHeight(height));

    // Clean-up
    return window.removeEventListener('resize', setContentHeight(height));
  }, [height]);

  return (
    <div>
      <Container className="content" style={expand}>
        <div ref={ref}>
          <ImageWrapper>
            <GatsbyImage
              image={imageSharp}
              alt={`dog ${name}`}
              imgStyle={{ borderRadius: '5px' }}
            />
          </ImageWrapper>
          <Name size="sm" as="h3">
            {name}
          </Name>
          <Paragraph size="xsm" as="p">
            {text}
          </Paragraph>
        </div>
      </Container>
      <MoreButton
        className="test"
        onClick={() => onExpand(name)}
        theme={theme}
        style={spin}
      >
        <Boop y={5} direction="down" />
      </MoreButton>
    </div>
  );
};

export default Content;

Content.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
};
