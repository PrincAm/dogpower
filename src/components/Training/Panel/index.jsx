import React from 'react';
import styled from 'styled-components';

import IO from 'components/IO';
import Text from 'components/Text';
import Title from 'components/Title';
import Image from './ImageAnimated';
import TextAnimated from './TextAnimated';

const Part = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 5rem auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${({ imageOnLeft }) => (imageOnLeft ? 'left' : 'right')};
`;

const Box = styled.div`
  padding-bottom: 4rem;
`;

const Panel = ({ imageOnLeft = true, texts, imageFluid }) => (
  <Part>
    {imageOnLeft && (
      <IO rootMargin="0px">
        {({ isVisible }) => (
          <Image
            isVisible={isVisible}
            imageFluid={imageFluid}
            translateYFrom="60px"
            translateYTo="-20px"
          />
        )}
      </IO>
    )}
    <TextContainer imageOnLeft={imageOnLeft}>
      <IO rootMargin="0px">
        {({ isVisible }) => (
          <TextAnimated
            isVisible={isVisible}
            translateYFrom="60px"
            translateYTo="-20px"
          >
            <Box>
              <Title size="xxlarge" as="h2">
                {texts[0].text}
              </Title>
            </Box>
          </TextAnimated>
        )}
      </IO>
      <IO rootMargin="0px">
        {({ isVisible }) => (
          <TextAnimated
            isVisible={isVisible}
            translateYFrom="70px"
            translateYTo="-20px"
          >
            <Text size="large">{texts[1].text}</Text>
          </TextAnimated>
        )}
      </IO>
      <IO rootMargin="0px">
        {({ isVisible }) => (
          <TextAnimated
            isVisible={isVisible}
            translateYFrom="80px"
            translateYTo="-20px"
          >
            <Text size="medium">{texts[2].text}</Text>
          </TextAnimated>
        )}
      </IO>
    </TextContainer>
    {!imageOnLeft && (
      <IO rootMargin="0px">
        {({ isVisible }) => (
          <Image
            isVisible={isVisible}
            imageFluid={imageFluid}
            translateYFrom="60px"
            translateYTo="-20px"
          />
        )}
      </IO>
    )}
  </Part>
);

export default Panel;
