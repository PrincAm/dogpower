import React, { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout';
import Text, { PageTitle } from 'components/Text';
import ContactMe from 'components/ContactMe';
import { PageBox, TextBox, ImageBox } from 'components/Box';
import ThemeContext from '../store/theme';

const Service = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <PageBox theme={theme}>
        <PageTitle>Ceník</PageTitle>
        <ImageBox>
          <StaticImage
            src="../../content/images/training/dogpower3.jpg"
            alt="black dog"
            placeholder="blurred"
            layout="constrained"
            style={{
              borderRadius: '10px',
              maxWidth: '30rem',
              maxHeight: '30rem',
            }}
          />
        </ImageBox>
        <TextBox theme={theme}>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </TextBox>
      </PageBox>
      <ContactMe />
    </Layout>
  );
};

export default Service;
