import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import Layout from 'components/Layout';
import Text from 'components/Text';
import ThemeContext from '../store/theme';

import InstagramIcon from '../images/icons/instagram-brands.svg';
import YoutubeIcon from '../images/icons/youtube-brands.svg';

const TrainigContainer = styled.div`
  min-height: calc(100vh - 14rem);
  max-width: ${({ theme }) => theme.width};
  margin: ${({ theme }) => theme.marginHeader} auto 0 auto;
`;

const StyledTitle = styled(Text)`
  margin-bottom: 1.5rem;
`;

const Address = styled.div`
  margin-top: 1rem;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 3.2rem;
  line-height: 4.4rem;
  transition: color 0.5s ease;

  &:hover {
    color: #4f868e;
  }

  &:first-of-type {
    margin-top: 1.5rem;
  }
`;

const Content = styled.div`
  display: flex;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;

const iconStyles = css`
  width: 12rem;
  height: 12rem;
  transition: color 0.5s ease;

  &:hover {
    color: #4f868e;
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
        <StyledTitle size="xlarge" as="h1">
          Kontakt
        </StyledTitle>
        <Content>
          <Block>
            <Text>
              Rádi by jste si sjednali úvodní lekci nebo se na cokoliv zeptali?
              <br />
              Prosím zavolejte.
            </Text>
            <Link href="tel:+420775553021">775 553 021</Link>
            <Link href="mailto:info@dogpower.cz">info@dogpower.cz</Link>
          </Block>
          <Block>
            <Text size="large" as="h2">
              Jakub Slavík
            </Text>
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
        </Content>
        <SocialMedia>
          <a
            href="https://www.instagram.com/dogpower.cz/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCvUMW1zxD2ZX1ORkNfUklSw"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube />
          </a>
        </SocialMedia>
      </TrainigContainer>
    </Layout>
  );
};

export default Contact;
