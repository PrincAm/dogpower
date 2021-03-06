import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import IO from 'components/IO';
import Text from 'components/Text';
import Boop from 'components/Boop';
import Image from './ImageAnimated';
import TextAnimated from './TextAnimated';
import ThemeContext from '../../../store/theme';
import MEDIA from '../../../helpers/mediaTemplates';

const Part = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  max-width: 110rem;
  margin: 5rem auto;
  ${MEDIA.MOBILE`
    flex-direction: column;
    margin: 4rem auto;
    align-items: center;
 `};
  ${MEDIA.TABLET`
    flex-direction: column;
    margin: 4rem auto;
    align-items: center;
 `};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${({ imageOnLeft }) => (imageOnLeft ? 'left' : 'right')};
`;

const Box = styled.div`
  margin-bottom: 4rem;
  ${MEDIA.MOBILE`
    margin-top: 2rem;
 `};
  ${MEDIA.TABLET`
    margin-top: 2rem;
 `};
`;

const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.colorDarkSec};
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.colorDarkSec};}
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.linkColor};
    text-decoration: underline;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
`;

const Panel = ({ imageOnLeft = true, texts, imageFluid }) => {
  const theme = useContext(ThemeContext);
  return (
    <Part>
      {imageOnLeft && (
        <ImgWrapper>
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
        </ImgWrapper>
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
                  <Text size="xxlarge" as="h1">
                    {texts[0].text}
                  </Text>
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
              <Text size="large" as="p">
                {texts[1].text}
              </Text>
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
        <ImgWrapper>
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
        </ImgWrapper>
      )}
    </Part>
  );
};

export default Panel;
