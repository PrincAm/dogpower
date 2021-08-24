import React, { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';

import Layout from 'components/Layout';
import Text, { PageTitle } from 'components/Text';
import ContactMe from 'components/ContactMe';
import { PageBox, TextBox } from 'components/Box';
import ThemeContext from '../store/theme';
import MEDIA from '../helpers/mediaTemplates';

import DogIcon from '../images/dog-regular.svg';
import TravelIcon from '../images/route-regular.svg';

const ImageTextBox = styled.div`
  display: flex;
  margin-bottom: 3rem;

  ${MEDIA.TABLET`
    flex-direction: column;
    align-items: center;
 `};
  ${MEDIA.MOBILE`
    flex-direction: column;
 `};
`;

const ImageWrapper = styled.div`
  margin-right: 3rem;
  flex-shrink: 0;
  max-width: 30rem;
  max-height: 30rem;

  ${MEDIA.TABLET`
    margin-right: 0;
    margin-bottom: 2rem;;
  `};
  ${MEDIA.MOBILE`
    margin-right: 0;
    margin-bottom: 2rem;
    max-width: 100%;
    max-height: 100%;
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
  border: 5px solid #38817A;
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
`;

const Service = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <PageBox theme={theme}>
        <PageTitle>Ceník</PageTitle>
        <ImageTextBox>
          <ImageWrapper>
            <StaticImage
              src="../../content/images/training/dogpower3.jpg"
              alt="black dog"
              placeholder="blurred"
              layout="constrained"
              style={{
                borderRadius: '10px',
              }}
            />
          </ImageWrapper>
          <TextBox theme={theme}>
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
              <Bold>1024304695/6100</Bold> nejpozději dva dny od konání lekce
            </Text>
          </TextBox>
        </ImageTextBox>
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

export default Service;
