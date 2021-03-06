import React, { useContext } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import Layout from 'components/Layout';
import Text from 'components/Text';
import ContactMe from 'components/ContactMe';
import ThemeContext from '../store/theme';
import MEDIA from '../helpers/mediaTemplates';

const BackgroundImageStyled = styled(BackgroundImage)`
  width: 100%;
  height: 30rem;
`;

const TrainigContainer = styled.div`
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
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  max-width: 50rem;
`;

const Service = ({ data }) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <BackgroundImageStyled
        fluid={data.priceJson.bgImage.childImageSharp.fluid}
        backgroundColor={theme.background}
      >
        <Layout>
          <TrainigContainer theme={theme}>
            <Title size="xxlarge" as="h1">
              Ceník
            </Title>
            <ImageContainer>
              <ImageWrapper>
                <Img fluid={data.priceJson.image1.childImageSharp.fluid} />
              </ImageWrapper>
            </ImageContainer>
            <Text as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </TrainigContainer>
          <ContactMe />
        </Layout>
      </BackgroundImageStyled>
    </div>
  );
};

export default Service;

export const query = graphql`
  query PriceQuery {
    priceJson {
      image1 {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bgImage {
        childImageSharp {
          fluid(maxHeight: 900, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
