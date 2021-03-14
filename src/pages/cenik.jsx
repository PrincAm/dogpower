import React, { useContext } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout';
import Text from 'components/Text';
import ContactMe from 'components/ContactMe';
import ThemeContext from '../store/theme';
import MEDIA from '../helpers/mediaTemplates';

const Container = styled.div`
  min-height: 100vh;
  max-width: ${({ theme }) => theme.width};
  padding-top: ${({ theme }) => theme.marginHeader};
  margin: 0 auto 10rem auto;
  ${MEDIA.TABLET`
    min-height: calc(100vh - 15rem);
    margin: 0 5rem 5rem 5rem;
 `};
  ${MEDIA.MOBILE`
    min-height: calc(100vh - 15rem);
    margin: 0 2rem 5rem 2rem;
 `};
`;

const Title = styled(Text)`
  margin-bottom: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ImageWrapper = styled.div`
  margin-bottom: 3rem;
  max-width: 30rem;
  max-height: 30rem;
`;

const TextContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
`;

const Service = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <Container theme={theme}>
        <Title size="xxlarge" as="h1">
          Ceník
        </Title>
        <ImageContainer>
          <ImageWrapper>
            <StaticImage
              src="../../../content/images/instagram/insta3.jpg"
              alt="black dog"
              placeholder="blurred"
              layout="constrained"
              imgStyle={{ borderRadius: '10px' }}
            />
          </ImageWrapper>
        </ImageContainer>
        <TextContainer>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </TextContainer>
      </Container>
      <ContactMe />
    </Layout>
  );
};

export default Service;
