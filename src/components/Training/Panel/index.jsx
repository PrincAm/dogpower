import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import IO from 'components/IO';
import Text from 'components/Text';
import Title from 'components/Title';
import Boop from 'components/Boop';
import Image from './ImageAnimated';
import TextAnimated from './TextAnimated';
import ThemeContext from '../../../store/theme';

const Part = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
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

const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.colorDarkSec};
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.colorDarkSec};}
  transition: color 0.5s ease;

  &:hover {
    color: #4f868e;
  }
`;

const Panel = ({ imageOnLeft = true, texts, imageFluid }) => {
  const theme = useContext(ThemeContext);
  return (
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
                <TitleWrapper theme={theme}>
                  <Title size="xxlarge" as="h1">
                    {texts[0].text}
                  </Title>
                </TitleWrapper>
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
              <StyledLink to="/training" theme={theme}>
                <Boop x={10}>
                  <Text size="medium">{texts[2].text}</Text>
                </Boop>
              </StyledLink>
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
};

export default Panel;
