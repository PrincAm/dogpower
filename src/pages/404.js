import React, { useContext } from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Title from 'components/Title';
import Text from 'components/Text';
import ThemeContext from '../store/theme';

const TrainigContainer = styled.div`
  min-height: 100vh;
  max-width: ${({ theme }) => theme.width};
  margin: ${({ theme }) => theme.marginHeader} auto 0 auto;
`;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

const NotFound = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <TrainigContainer theme={theme}>
        <TitleWrapper>
          <Title size="large">Nenašli jsme, co jste hledali :(</Title>
        </TitleWrapper>
        <Text as="p">Zkuste jinou stránku z menu.</Text>
      </TrainigContainer>
    </Layout>
  );
};

export default NotFound;
