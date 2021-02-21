import React, { useContext } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import Title from 'components/Title';
import Text from 'components/Text';
import ContactMe from 'components/ContactMe';
import ThemeContext from '../store/theme';

const TrainigContainer = styled.div`
  min-height: calc(100vh - 14rem);
  max-width: ${({ theme }) => theme.width};
  margin: ${({ theme }) => theme.marginHeader} auto 10rem auto;
`;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  max-width: 50rem;
`;

const Training = ({ data }) => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <TrainigContainer theme={theme}>
        <TitleWrapper>
          <Text size="xlarge" as="h1">
            Výchova a trénink
          </Text>
        </TitleWrapper>
        <ImageContainer>
          <ImageWrapper>
            <Img fluid={data.trainingJson.image1.childImageSharp.fluid} />
          </ImageWrapper>
        </ImageContainer>
        <Text as="p">
          Výběrem a koupí psa vše začíná a záleží jen na Vás, jak bude probíhat
          Váš společný život. Snad všichni znají nějaké takové obecné moudro.
          Ale jak to udělat, aby se náš pes stal tím správným kamarádem, o
          kterém sníme? Jak už to bývá, existuje mnoho trenérů, mnoho metodik
          výchovy i výcviku, a tak je někdy pro laika těžké se v tom všem
          vyznat. Proč si tedy vybrat zrovna mě? V první řadě jsou to mnoholeté
          zkušenosti v tomto oboru a vášeň pro studium přirozeného chování
          tohoto úžasného a jedinečného tvora, kterým pro mě pes rozhodně je.
          Pokud se stanete mým klientem, předám vám všechny své zkušenosti se
          100% nasazením a sami budete moct poznat můj zápal pro věc. Po
          vyslechnutí Vašich požadavků, ať už se týkají odstranění nežádoucího
          chování nebo třeba zvládání základních povelů, vytvořím tréninkový
          plán ušitý přímo Vám dvěma na míru. Netrénuji psy ve skupině, budu se
          vždy věnovat pouze Vám a Vašemu čtyřnohému parťákovi. U mě se naučíte
          rozumět svému psovi a díky tomu se ho naučíte efektivně vychovávat a
          trénovat. Společně napravíme zlozvyky anebo naučíme Vašeho psa novým
          dovednostem, a to vše výhradně metodou pozitivní motivace. A navíc, po
          dobu co budete mými klienty, získáte jako doplňkovou službu bezplatné
          poradenství po telefonu, a to v době: pondělí – pátek, 9.00 – 17.00.
        </Text>
      </TrainigContainer>
      <ContactMe />
    </Layout>
  );
};

export default Training;

export const query = graphql`
  query TrainingQuery {
    trainingJson {
      image1 {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
