import React, { useContext } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Text from 'components/Text';
import InstagramIcon from '../../images/icons/instagram-brands.svg';
import MEDIA from '../../helpers/mediaTemplates';

import ThemeContext from '../../store/theme';

const Background = styled.div`
  background-color: #fff;
  padding: 10rem 0;

  ${MEDIA.MOBILE`
    padding: 5rem 2rem;
 `};
`;

const Container = styled.div`
  color: ${({ theme }) => theme.colorDarkSec};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width};
`;

const TitleWrapper = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

const Images = styled.div`
  display: flex;
`;

const ImgWrapper = styled.div`
  width: 100%;
  transform: scale(1);
  margin-right: 2rem;
  transition: 0.3s ease-in-out;
  &:last-of-type {
    margin-right: 0;
  }
  & + {Img}:hover {
    transform: scale(1.1);
  }
`;

const Icon = styled(InstagramIcon)`
  width: 12rem;
  height: 12rem;
  margin: 3rem 0 1rem;
  color: ${({ theme }) => theme.color};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.linkColor};
  }

  ${MEDIA.TABLET`
    margin: 0;
 `};
  ${MEDIA.MOBILE`
    margin: 0;
 `};
`;

const ImagesDesktopWrapper = styled.div`
  ${MEDIA.TABLET`
    display: none;
 `};
  ${MEDIA.MOBILE`
    display: none;
 `};
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Instagram = () => {
  const theme = useContext(ThemeContext);

  return (
    <Background theme={theme}>
      <Container theme={theme}>
        <TitleWrapper>
          <Text size="xxlarge" as="h1">
            Navštivte nás na Instagramu
          </Text>
        </TitleWrapper>
        <ImagesDesktopWrapper>
          <Images>
            <ImgWrapper>
              <a
                href="https://www.instagram.com/dogpower_cz/"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="../../../content/images/instagram/insta1.jpg"
                  alt="black dog"
                  placeholder="blurred"
                  layout="constrained"
                  imgStyle={{ borderRadius: '10px' }}
                />
              </a>
            </ImgWrapper>

            <ImgWrapper>
              <a
                href="https://www.instagram.com/dogpower_cz/"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="../../../content/images/instagram/insta2.jpg"
                  alt="man and dog giving highfive"
                  placeholder="blurred"
                  layout="constrained"
                  imgStyle={{ borderRadius: '10px' }}
                />
              </a>
            </ImgWrapper>
            <ImgWrapper>
              <a
                href="https://www.instagram.com/dogpower_cz/"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="../../../content/images/instagram/insta3.jpg"
                  alt="man and dog"
                  placeholder="blurred"
                  layout="constrained"
                  imgStyle={{ borderRadius: '10px' }}
                />
              </a>
            </ImgWrapper>
          </Images>
        </ImagesDesktopWrapper>
        <IconWrapper>
          <a
            href="https://www.instagram.com/dogpower_cz/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon theme={theme} />
          </a>
        </IconWrapper>
      </Container>
    </Background>
  );
};

export default Instagram;
