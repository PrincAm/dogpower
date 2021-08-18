import React, { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout';
import Text, { PageTitle } from 'components/Text';
import { PageBox, ImageBox } from 'components/Box';
import ThemeContext from '../store/theme';

const NotFound = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <PageBox theme={theme}>
        <PageTitle>Nenašli jsme, co jste hledali :(</PageTitle>
        <ImageBox>
          <StaticImage
            src="../../content/images/pages/404/404.jpg"
            alt="collie"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '10px', maxHeight: '30rem' }}
          />
        </ImageBox>
        <Text as="p">Zkuste jinou stránku z menu.</Text>
      </PageBox>
    </Layout>
  );
};

export default NotFound;
