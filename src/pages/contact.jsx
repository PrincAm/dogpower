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

const Contact = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <TrainigContainer theme={theme}>
        <TitleWrapper>
          <Title size="large">Kontakt</Title>
        </TitleWrapper>
        <Text as="p">
          Adresa
          <br />
          Jakub Slavík
          <br />
          Wiesenthalova 1034/6
          <br /> Praha 5 – Řeporyje
          <br /> 155 00
          <br /> IČO 07655584
        </Text>
      </TrainigContainer>
    </Layout>
  );
};

export default Contact;
