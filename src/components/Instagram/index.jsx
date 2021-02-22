import React, { useContext } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import InstagramIcon from '../../images/icons/instagram-brands.svg';
import Title from 'components/Title';
import Text from 'components/Text';

import ThemeContext from '../../store/theme';

const Background = styled.div`
  background-color: #ffdc80;
  padding: 10rem 0;
`;

const Container = styled.div`
  color: ${({ theme }) => theme.colorDarkSec};
  margin: 0 auto;
  max-width: 1000px;
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
  transition: .3s ease-in-out;
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
  &:last-of-type {
    padding-left: 0.5rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Instagram = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <Background theme={theme}>
      <Container theme={theme}>
        <TitleWrapper>
          <Title size="xxlarge" as="h2">
            Navštivte nás na Instagramu
          </Title>
        </TitleWrapper>
        <Images>
          <ImgWrapper>
            <a
              href="https://www.instagram.com/dogpower_cz/"
              target="_blank"
              rel="noreferrer"
            >
              <Img fluid={data.photo1.childImageSharp.fluid} />
            </a>
          </ImgWrapper>
          <ImgWrapper>
            <a
              href="https://www.instagram.com/dogpower_cz/"
              target="_blank"
              rel="noreferrer"
            >
              <Img fluid={data.photo2.childImageSharp.fluid} />
            </a>
          </ImgWrapper>
          <ImgWrapper>
            <a
              href="https://www.instagram.com/dogpower_cz/"
              target="_blank"
              rel="noreferrer"
            >
              <Img fluid={data.photo3.childImageSharp.fluid} />
            </a>
          </ImgWrapper>
        </Images>
        <IconWrapper>
          <a
            href="https://www.instagram.com/dogpower_cz/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon theme={theme} />
          </a>
          <Text size="small">@dogpower_cz</Text>
        </IconWrapper>
      </Container>
    </Background>
  );
};

export default Instagram;
