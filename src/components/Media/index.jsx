import React, { useContext } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Text from 'components/Text';
import ThemeContext from '../../store/theme';

const Background = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Container = styled.div`
  padding: 10rem 0;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width};
`;

const TitleWrapper = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

const ReferenceWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
  }
`;

const Reference = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background};
  padding: 3rem;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Media = () => {
  const theme = useContext(ThemeContext);

  return (
    <Background>
      <Container>
        <TitleWrapper>
          <Text size="xl" as="h1">
            Dogpower v médiích
          </Text>
        </TitleWrapper>
        <ReferenceWrapper theme={theme}>
          <a
            href="https://www.ecanis.cz/clanky/mit-po-svem-boku-psa-neni-samozrejmosti-_1849.html"
            target="_blank"
            rel="noreferrer"
          >
            <Reference theme={theme}>
              <Text size="md" as="h2">
                „Mít po svém boku psa není samozřejmostí!“
              </Text>
              <Text size="sm">Rozhovor pro eCanis.cz</Text>
              <StaticImage
                src="../../../content/images/media/ecanis-logo.png"
                alt="ecanis logo"
                placeholder="blurred"
                layout="constrained"
                imgStyle={{ maxWidth: '25rem' }}
              />
            </Reference>
          </a>
        </ReferenceWrapper>
      </Container>
    </Background>
  );
};

export default Media;
