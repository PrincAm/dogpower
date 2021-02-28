import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import Layout from 'components/Layout';
import Text from 'components/Text';
import ThemeContext from '../store/theme';

import InstagramIcon from '../images/icons/instagram-brands.svg';
import YoutubeIcon from '../images/icons/youtube-brands.svg';
import MEDIA from '../helpers/mediaTemplates';

const TrainigContainer = styled.div`
  min-height: calc(100vh - 14rem);
  max-width: ${({ theme }) => theme.width};
  margin: ${({ theme }) => theme.marginHeader} auto 0 auto;

  ${MEDIA.MOBILE`
    min-height: calc(100vh - 15rem);
    margin: 10rem 2rem 5rem 2rem;
 `};
`;

const Title = styled(Text)`
  margin-bottom: 4rem;
`;

const Address = styled.div`
  margin-top: 1rem;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  ${MEDIA.MOBILE`
    width: 100%;
 `};
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 3.2rem;
  line-height: 4.4rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.linkColor};
    text-decoration: underline;
  }

  &:first-of-type {
    margin-top: 1.5rem;
  }
`;

const Content = styled.div`
  display: flex;

  ${MEDIA.MOBILE`
    flex-direction: column;
 `};
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const iconStyles = css`
  width: 12rem;
  height: 12rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.linkColor};
  }
  &:last-of-type {
    padding-left: 0.5rem;
  }
`;

const Instagram = styled(InstagramIcon)`
  ${iconStyles};
`;

const Youtube = styled(YoutubeIcon)`
  ${iconStyles};
`;

const Contact = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <TrainigContainer theme={theme}>
        <Title size="xxlarge" as="h1">
          Kontakt
        </Title>
        <Content>
          <Block>
            <Text size="large" as="h2">
              Jakub Slavík
            </Text>
            <Link href="tel:+420775553021" theme={theme}>
              775 553 021
            </Link>
            <Link href="mailto:info@dogpower.cz" theme={theme}>
              info@dogpower.cz
            </Link>
            <Address>
              <Text size="medium" as="h3">
                Cvičebna i sídlo
              </Text>
              <Text as="p">
                Wiesenthalova 1034/6
                <br /> 155 00, Praha 5 – Řeporyje
                <br />
                <br /> IČO 07655584
              </Text>
            </Address>
          </Block>
          <Block>
            <SocialMedia>
              <a
                href="https://www.instagram.com/dogpower.cz/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram theme={theme} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCvUMW1zxD2ZX1ORkNfUklSw"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube theme={theme} />
              </a>
            </SocialMedia>
          </Block>
        </Content>
      </TrainigContainer>
    </Layout>
  );
};

export default Contact;
