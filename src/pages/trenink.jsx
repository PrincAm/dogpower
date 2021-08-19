import React, { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Text, { PageTitle } from 'components/Text';
import ContactMe from 'components/ContactMe';
import { PageBox, TextBox } from 'components/Box';
import ThemeContext from '../store/theme';

const ImageTextBox = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const Training = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <PageBox theme={theme}>
        <PageTitle>Trénink</PageTitle>
        <ImageTextBox>
          <StaticImage
            src="../../content/images/training/dogpower1.jpg"
            alt="black dog"
            placeholder="blurred"
            layout="constrained"
            style={{
              borderRadius: '10px',
              maxWidth: '30rem',
              maxHeight: '30rem',
              flexShrink: 0,
              marginRight: '3rem',
            }}
          />
          <TextBox theme={theme}>
            <Text size="sm" as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </TextBox>
        </ImageTextBox>
        <TextBox theme={theme}>
          <Text size="sm" as="p">
            Výběrem a koupí psa vše začíná a záleží jen na Vás, jak bude
            probíhat Váš společný život. Snad všichni znají nějaké takové obecné
            moudro. Ale jak to udělat, aby se náš pes stal tím správným
            kamarádem, o kterém sníme? Jak už to bývá, existuje mnoho trenérů,
            mnoho metodik výchovy i výcviku, a tak je někdy pro laika těžké se v
            tom všem vyznat. Proč si tedy vybrat zrovna mě? V první řadě jsou to
            mnoholeté zkušenosti v tomto oboru a vášeň pro studium přirozeného
            chování tohoto úžasného a jedinečného tvora, kterým pro mě pes
            rozhodně je. Pokud se stanete mým klientem, předám vám všechny své
            zkušenosti se 100% nasazením a sami budete moct poznat můj zápal pro
            věc. Po vyslechnutí Vašich požadavků, ať už se týkají odstranění
            nežádoucího chování nebo třeba zvládání základních povelů, vytvořím
            tréninkový plán ušitý přímo Vám dvěma na míru. Netrénuji psy ve
            skupině, budu se vždy věnovat pouze Vám a Vašemu čtyřnohému
            parťákovi. U mě se naučíte rozumět svému psovi a díky tomu se ho
            naučíte efektivně vychovávat a trénovat. Společně napravíme zlozvyky
            anebo naučíme Vašeho psa novým dovednostem, a to vše výhradně
            metodou pozitivní motivace. A navíc, po dobu co budete mými klienty,
            získáte jako doplňkovou službu bezplatné poradenství po telefonu, a
            to v době: pondělí – pátek, 9.00 – 17.00.
          </Text>
        </TextBox>
      </PageBox>
      <ContactMe />
    </Layout>
  );
};

export default Training;
