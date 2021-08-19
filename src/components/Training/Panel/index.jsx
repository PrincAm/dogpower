import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Io from 'components/IO';
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
    margin: 2rem auto;
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
  color: ${({ theme }) => theme.color};
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.linkColor};
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageWrapper = styled.div`
  max-width: 40rem;

  ${MEDIA.TABLET`
    max-width: 50rem;
 `};
`;

const Panel = ({ imageOnLeft = true, texts, image }) => {
  const theme = useContext(ThemeContext);
  return (
    <Part>
      {imageOnLeft && (
        <ImageWrapper>
          <Io rootMargin="0px">
            {({ isVisible }) => (
              <Image
                isVisible={isVisible}
                image={image}
                translateYFrom="10rem"
                translateYTo="-2rem"
                altText="dog with owner"
              />
            )}
          </Io>
        </ImageWrapper>
      )}
      <TextContainer imageOnLeft={imageOnLeft}>
        <Io rootMargin="0px">
          {({ isVisible }) => (
            <TextAnimated
              isVisible={isVisible}
              translateYFrom="10rem"
              translateYTo="-2rem"
            >
              <Box>
                <TitleWrapper theme={theme}>
                  <Text size="xl" as="h1">
                    {texts[0].text}
                  </Text>
                </TitleWrapper>
              </Box>
            </TextAnimated>
          )}
        </Io>
        <Io rootMargin="0px">
          {({ isVisible }) => (
            <TextAnimated
              isVisible={isVisible}
              translateYFrom="10rem"
              translateYTo="-2rem"
            >
              <Text size="l" as="p">
                {texts[1].text}
              </Text>
            </TextAnimated>
          )}
        </Io>
        <Io rootMargin="0px">
          {({ isVisible }) => (
            <TextAnimated
              isVisible={isVisible}
              translateYFrom="10rem"
              translateYTo="-2rem"
            >
              <StyledLink to="/trenink" theme={theme}>
                <Boop x={10}>
                  <Text size="md">{texts[2].text}</Text>
                </Boop>
              </StyledLink>
            </TextAnimated>
          )}
        </Io>
      </TextContainer>
      {!imageOnLeft && (
        <ImageWrapper>
          <Io rootMargin="0px">
            {({ isVisible }) => (
              <Image
                isVisible={isVisible}
                image={image}
                translateYFrom="10rem"
                translateYTo="-2rem"
                altText="dog with owner"
              />
            )}
          </Io>
        </ImageWrapper>
      )}
    </Part>
  );
};

export default Panel;

Panel.propTypes = {
  texts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, text: PropTypes.string })
  ).isRequired,
  image: PropTypes.shape({}).isRequired,
  imageOnLeft: PropTypes.bool,
};
