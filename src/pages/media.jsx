import React, { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout';
import Text, { PageTitle } from 'components/Text';
import { PageBox, TextBox, ImageBox } from 'components/Box';
import ThemeContext from '../store/theme';

const Media = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <PageBox theme={theme}>
        <PageTitle>Média</PageTitle>
        <ImageBox>
          <StaticImage
            src="../../content/images/training/dogpower2.jpg"
            alt="black dog"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '10px', maxHeight: '30rem' }}
            imgStyle={{ borderRadius: '10px' }}
          />
        </ImageBox>
        <TextBox theme={theme}>
          <Text size="sm" as="p">
            Media
          </Text>
        </TextBox>
      </PageBox>
    </Layout>
  );
};

export default Media;
