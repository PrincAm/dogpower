import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import Welcome from 'components/Welcome';
import Training from 'components/Training';
import Reviews from 'components/Reviews';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  const trainingRef = createRef();

  return (
    <Layout>
      <Welcome data={data.homeJson} trainingRef={trainingRef} />
      <Training ref={trainingRef} data={data.homeJson} />
      <Reviews />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
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
    }
  }
`;
