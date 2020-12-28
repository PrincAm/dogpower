import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import Welcome from 'components/Welcome';
import Training from 'components/Training';
import References from 'components/References';
import ContactMe from 'components/ContactMe';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  const trainingRef = createRef();

  return (
    <Layout>
      <Welcome data={data.homepageJson} trainingRef={trainingRef} />
      <Training ref={trainingRef} data={data.homepageJson} />
      <References data={data.referencesJson} />
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
        image {
          childImageSharp {
            fluid(maxHeight: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    homepageJson {
      title
      backgroundImage {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trainingImage1 {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trainingImage2 {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      landingImg {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dog1Img {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dog2Img {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dog3Img {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dog4Img {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dog5Img {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dog6Img {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
