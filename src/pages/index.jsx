import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Welcome from 'components/Welcome';
import Training from 'components/Training';
import References from 'components/References';
import ContactMe from 'components/ContactMe';
import Instagram from 'components/Instagram';
import Media from 'components/Media';
import MEDIA from '../helpers/mediaTemplates';
import { graphql } from 'gatsby';

const ReferencesDesktopWrapper = styled.div`
  ${MEDIA.TABLET`
    display: none;
 `};
  ${MEDIA.MOBILE`
    display: none;
 `};
`;

const Index = ({ data }) => {
  const trainingRef = createRef();

  return (
    <Layout>
      <Welcome data={data.homepageJson} trainingRef={trainingRef} />
      <Training ref={trainingRef} data={data.homepageJson} />
      <ReferencesDesktopWrapper>
        <References data={data.referencesJson} />
      </ReferencesDesktopWrapper>
      <Media />
      <Instagram />
      <ContactMe hasSecondaryBg={false} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
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
    homepageJson {
      landingPhoto {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      photo1 {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      photo2 {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      photo3 {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;
