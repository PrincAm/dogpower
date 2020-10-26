import React from 'react';
import styled from 'styled-components';
import { useSpring, useTrail, a } from 'react-spring';
import Img from 'gatsby-image';

const Part = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 5rem auto;
`;

const Image = styled(Img)`
  flex-shrink: 0;
  height: 300px;
  width: 500px;
`;

const Paragraph = styled.p`
  width: 500px;
  font-size: 3rem;
  line-height: 3.2rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${({ imageOnLeft }) => (imageOnLeft ? 'left' : 'right')};
`;

const Item = ({ isVisible, imageFluid, imageOnLeft = true, texts }) => {
  const imageProps = useSpring({
    config: { mass: 5, tension: 800, friction: 200 },
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0,-60px,0)' : 'translate3d(0,0px,0)',
  });
  const trail = useTrail(texts.length, {
    config: { mass: 5, tension: 800, friction: 200 },
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0,-60px,0)' : 'translate3d(0,0px,0)',
  });
  return (
    <Part>
      {imageOnLeft && (
        <a.div key="image" style={imageProps}>
          <Image fluid={imageFluid} />
        </a.div>
      )}
      <TextContainer imageOnLeft={imageOnLeft}>
        {trail.map((props, index) => (
          <a.div key={texts[index].id} style={props}>
            <Paragraph>{texts[index].text}</Paragraph>
          </a.div>
        ))}
      </TextContainer>
      {!imageOnLeft && (
        <a.div key="image" style={imageProps}>
          <Image fluid={imageFluid} />
        </a.div>
      )}
    </Part>
  );
};

export default Item;
