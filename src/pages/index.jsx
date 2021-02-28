import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import Welcome from 'components/Welcome';
import Training from 'components/Training';
import References from 'components/References';
import ContactMe from 'components/ContactMe';
import Instagram from 'components/Instagram';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  const trainingRef = createRef();

  return (
    <Layout>
      <Welcome data={data.homepageJson} trainingRef={trainingRef} />
      <Training ref={trainingRef} data={data.homepageJson} />
      {/* <References data={data.referencesJson} /> */}
      <Instagram data={data.instagramJson} />
      <ContactMe />
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
      }
    }
    instagramJson {
      photo1 {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photo2 {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photo3 {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    homepageJson {
      landingImg {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dog1Img {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dog2Img {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dog3Img {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
