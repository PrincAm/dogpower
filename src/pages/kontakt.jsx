import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import Layout from 'components/Layout';
import Text, { PageTitle } from 'components/Text';
import { PageBox, TextBox } from 'components/Box';
import GoogleMap from 'components/GoogleMap';
import ThemeContext from '../store/theme';
import InstagramIcon from '../images/icons/instagram-brands.svg';
import YoutubeIcon from '../images/icons/youtube-brands.svg';
import MEDIA from '../helpers/mediaTemplates';

const Address = styled.div`
  margin-top: 1rem;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  ${MEDIA.MOBILE`
    width: 100%;
    padding: 0rem;
 `};
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 3.2rem;
  line-height: 4.4rem;
  transition: color 0.2s ease;
  color: ${({ theme }) => theme.linkColor};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  &:first-of-type {
    margin-top: 1.5rem;
  }
`;

const TextFlexBox = styled(TextBox)`
  display: flex;

  ${MEDIA.MOBILE`
    flex-direction: column;
    padding: 1rem;
    background-color: ${({ theme }) => theme.background};
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
  color: ${({ theme }) => theme.color};

  &:hover {
    color: ${({ theme }) => theme.linkColor};
  }
  &:last-of-type {
    padding-left: 0.5rem;
  }
  ${MEDIA.MOBILE`
    width: 8rem;
    height: 8rem;
 `};
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
      <PageBox theme={theme}>
        <PageTitle>Kontakt</PageTitle>
        <TextFlexBox theme={theme}>
          <Block>
            <Text size="l" as="h2">
              Jakub Slavík
            </Text>
            <Link href="tel:+420775553021" theme={theme}>
              775 553 021
            </Link>
            <Link href="mailto:info@dogpower.cz" theme={theme}>
              info@dogpower.cz
            </Link>
            <Address>
              <Text as="p">
                Wiesenthalova 1034/6
                <br /> 155 00, Praha 5 – Řeporyje
                <br /> IČO 07655584
              </Text>
            </Address>
          </Block>
          <Block>
            <SocialMedia>
              <a
                href="https://www.instagram.com/dogpower_cz/"
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
        </TextFlexBox>
        <GoogleMap />
      </PageBox>
    </Layout>
  );
};

export default Contact;
