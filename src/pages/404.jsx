import React, { useContext } from 'react';

import Layout from 'components/Layout';
import Text, { PageTitle } from 'components/Text';
import { PageBox } from 'components/Box';
import ThemeContext from '../store/theme';

const NotFound = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <PageBox theme={theme}>
        <PageTitle>Nenašli jsme, co jste hledali :(</PageTitle>
        <Text as="p">Zkuste jinou stránku z menu.</Text>
      </PageBox>
    </Layout>
  );
};

export default NotFound;
