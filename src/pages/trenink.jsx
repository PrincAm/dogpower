import React, { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout';
import Text, { PageTitle } from 'components/Text';
import ContactMe from 'components/ContactMe';
import { PageBox, TextBox, ImageBox } from 'components/Box';
import ThemeContext from '../store/theme';

const Training = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <PageBox theme={theme}>
        <PageTitle>Trénink</PageTitle>
        <ImageBox>
          <StaticImage
            src="../../content/images/training/dogpower1.jpg"
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
