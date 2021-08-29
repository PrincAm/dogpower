import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import Layout from 'components/Layout';
import Text, { PageTitle } from 'components/Text';
import ContactMe from 'components/ContactMe';
import { PageBox, TextBox } from 'components/Box';
import ThemeContext from '../store/theme';
import MEDIA from '../helpers/mediaTemplates';

import DogIcon from '../images/dog-regular.svg';
import TravelIcon from '../images/route-regular.svg';

const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NarrowTextBox = styled(TextBox)`
  margin-bottom: 3rem;
  max-width: 70rem;

  ${MEDIA.TABLET`
    flex-direction: column;
    align-items: center;
 `};
  ${MEDIA.MOBILE`
    flex-direction: column;
 `};
`;

const PriceContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;

  ${MEDIA.MOBILE`
    flex-direction: column;
  `};
`;

const PriceBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 5px solid #38817a;
  padding: 1.2rem;
  text-align: center;

  &:first-child {
    margin-right: 0.5rem;
  }
  &:last-child {
    margin-left: 0.5rem;
  }

  ${MEDIA.MOBILE`
    &:first-child {
      margin-right: 0;
      margin-bottom: 1rem;
    }
    &:last-child {
      margin-left: 0;
    }
  `};
`;

const iconStyles = css`
  height: 5rem;
  width: 5rem;
  margin: 1rem 0;
`;

const Dog = styled(DogIcon)`
  ${iconStyles}
`;

const Travel = styled(TravelIcon)`
  ${iconStyles}
`;

const PriceText = styled(Text)`
  display: inline;
  font-weight: 500;
`;

const MinutesText = styled(Text)`
  display: inline;
`;

const Bold = styled.span`
  font-weight: 500;
`;

const Conditions = styled(Text)`
  font-style: italic;
  margin-bottom: 0;
`;

const PriceList = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <PageBox theme={theme}>
        <PageTitle>Ceník</PageTitle>
        <CenterContainer>
          <NarrowTextBox theme={theme}>
            <PriceContainer>
              <PriceBox>
                <Bold>Cena 1 lekce</Bold>
                <Dog />
                <span>
                  <PriceText>800 Kč</PriceText>{' '}
                  <MinutesText size="xsm">za 55 min</MinutesText>
                </span>
              </PriceBox>
              <PriceBox>
                <Bold>Příplatek za cestu k Vám</Bold>
                <Travel />
                <PriceText>700 Kč</PriceText>
              </PriceBox>
            </PriceContainer>
            <Text size="sm">
              Lekce se platí převodem na bankovní účet{' '}
              <Bold>1024304695/6100</Bold> nejpozději dva dny od jejího konání. Do poznámky pro příjemce uveďte datum lekce a jméno vašeho psího parťáka.
            </Text>
          </NarrowTextBox>
        </CenterContainer>
        <TextBox theme={theme}>
          <Conditions size="sm" as="p">
            * Přihlášení na lekci je závazné. Odhlášení bez storno poplatku je
            možné nejpozději 48 hodin před konáním lekce. V případě pozdějšího
            odhlášení bude účtován storno poplatek ve výši 50% z domluvené ceny.
            V případě odhlášení později než 24 hodin před konáním lekce bude
            účtován poplatek ve výši 100% z domluvené ceny.
          </Conditions>
        </TextBox>
      </PageBox>
      <ContactMe />
    </Layout>
  );
};

export default PriceList;
