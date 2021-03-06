import React, { useContext } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import Layout from 'components/Layout';
import Text from 'components/Text';
import ContactMe from 'components/ContactMe';
import ThemeContext from '../store/theme';
import MEDIA from '../helpers/mediaTemplates';

const BackgroundImageStyled = styled(BackgroundImage)`
  width: 100%;
  height: 30rem;
`;

const TrainigContainer = styled.div`
  min-height: calc(100vh - 14rem);
  max-width: ${({ theme }) => theme.width};
  padding-top: ${({ theme }) => theme.marginHeader};
  margin: 0 auto 10rem auto;

  ${MEDIA.TABLET`
    min-height: calc(100vh - 15rem);
    margin: 0 5rem 5rem 5rem;
 `};
  ${MEDIA.MOBILE`
    min-height: calc(100vh - 15rem);
    margin: 0 2rem 5rem 2rem;
 `};
`;

const Title = styled(Text)`
  margin-bottom: 4rem;
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
    <div>
      <BackgroundImageStyled
        fluid={data.trainingJson.bgImage.childImageSharp.fluid}
        backgroundColor={theme.background}
      >
        <Layout>
          <TrainigContainer theme={theme}>
            <Title size="xxlarge" as="h1">
              Výchova a trénink
            </Title>
            <ImageContainer>
              <ImageWrapper>
                <Img fluid={data.trainingJson.image1.childImageSharp.fluid} />
              </ImageWrapper>
            </ImageContainer>
            <Text as="p">
              Výběrem a koupí psa vše začíná a záleží jen na Vás, jak bude
              probíhat Váš společný život. Snad všichni znají nějaké takové
              obecné moudro. Ale jak to udělat, aby se náš pes stal tím správným
              kamarádem, o kterém sníme? Jak už to bývá, existuje mnoho trenérů,
              mnoho metodik výchovy i výcviku, a tak je někdy pro laika těžké se
              v tom všem vyznat. Proč si tedy vybrat zrovna mě? V první řadě
              jsou to mnoholeté zkušenosti v tomto oboru a vášeň pro studium
              přirozeného chování tohoto úžasného a jedinečného tvora, kterým
              pro mě pes rozhodně je. Pokud se stanete mým klientem, předám vám
              všechny své zkušenosti se 100% nasazením a sami budete moct poznat
              můj zápal pro věc. Po vyslechnutí Vašich požadavků, ať už se
              týkají odstranění nežádoucího chování nebo třeba zvládání
              základních povelů, vytvořím tréninkový plán ušitý přímo Vám dvěma
              na míru. Netrénuji psy ve skupině, budu se vždy věnovat pouze Vám
              a Vašemu čtyřnohému parťákovi. U mě se naučíte rozumět svému psovi
              a díky tomu se ho naučíte efektivně vychovávat a trénovat.
              Společně napravíme zlozvyky anebo naučíme Vašeho psa novým
              dovednostem, a to vše výhradně metodou pozitivní motivace. A
              navíc, po dobu co budete mými klienty, získáte jako doplňkovou
              službu bezplatné poradenství po telefonu, a to v době: pondělí –
              pátek, 9.00 – 17.00.
            </Text>
          </TrainigContainer>
          <ContactMe />
        </Layout>
      </BackgroundImageStyled>
    </div>
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
      bgImage {
        childImageSharp {
          fluid(maxHeight: 900, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
