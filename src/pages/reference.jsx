import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout';
import { PageBox, TextBox } from 'components/Box';
import Text, { PageTitle } from 'components/Text';
import ThemeContext from '../store/theme';

const StyledTextBox = styled(TextBox)`
  margin-bottom: 2rem;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ImageWrapper = styled.div`
  margin-bottom: 2rem;
  max-width: 20rem;
  max-height: 20rem;
`;

const DogName = styled(Text)`
  margin-bottom: 2rem;
  font-weight: 500;
`;

const RereferenceText = styled(Text)`
  margin-bottom: 0;
`;

const Reference = ({ data }) => {
  const theme = useContext(ThemeContext);
  const { referencesJson } = data;

  return (
    <Layout>
      <PageBox theme={theme}>
        <PageTitle>Reference</PageTitle>
        {referencesJson.references.map(({ name, text, image }) => {
          const imageSharp = getImage(image);

          return (
            <StyledTextBox theme={theme} key={name}>
              <DogName size="l" as="h2">
                {name}
              </DogName>
              <CenterContainer>
                <ImageWrapper>
                  <GatsbyImage
                    image={imageSharp}
                    alt={`dog ${name}`}
                    imgStyle={{ borderRadius: '10px' }}
                  />
                </ImageWrapper>
              </CenterContainer>
              <RereferenceText size="sm" as="p">
                {text}
              </RereferenceText>
            </StyledTextBox>
          );
        })}
      </PageBox>
    </Layout>
  );
};

export default Reference;

Reference.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query ReferenceQuery {
    referencesJson {
      references {
        name
        text
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
