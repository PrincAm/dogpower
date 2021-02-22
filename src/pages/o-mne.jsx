import React, { useContext } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import Text from 'components/Text';
import ThemeContext from '../store/theme';

const TrainigContainer = styled.div`
  min-height: 100vh;
  max-width: ${({ theme }) => theme.width};
  margin: ${({ theme }) => theme.marginHeader} auto 10rem auto;
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

const About = ({ data }) => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <TrainigContainer theme={theme}>
        <Title size="xxlarge" as="h1">
          O mně
        </Title>
        <ImageContainer>
          <ImageWrapper>
            <Img fluid={data.aboutMeJson.image1.childImageSharp.fluid} />
          </ImageWrapper>
        </ImageContainer>
        <Text as="p">
          Jmenuji se Jakub Slavík a rád bych se Vám prostřednictvím tohoto textu
          představil. V mé rodině se vášeň pro přírodu, a zejména pro trénování
          psů, dědí po generace. Tak jsem se mohl již od útlého věku učit
          porozumět těmto úžasným tvorům a zdokonalovat se v jejich výcviku. Za
          můj život u mé nohy kráčelo už několik věrných psích kamarádů a jak
          plynul čas, z koníčku se stával životní styl. Nyní je důležitou
          součástí mého životního stylu i cestování, ale ani při mých toulkách
          světem mě zvídavost neopouští a třeba i v nejodlehlejších částech Asie
          pozoruji přirozené chování psů ve smečkách žijících na ulicích anebo
          jejich soužití s člověkem v rozdílných kulturních podmínkách. I tím se
          snažím obohatit svoje vědomosti z oboru kynologie a získané zkušenosti
          následně aplikuji při výchově a tréninku. Svého současného psa Darwina
          jsem potkal v jeho 2 letech. Byl to zanedbaný, bázlivý a absolutně
          nesocializovaný pes, který všechny i zdánlivě banální situace řešil
          vrčením nebo napadáním lidí. Věnoval jsem mu každou volnou chvilku a
          jeho pokrok byl neskutečný. Spolu s ním rostly i mé znalosti a
          zdokonalovala se má schopnost „vžít se“ do psí mysli. Po necelém roce
          se z Darwina stal spolehlivý a vychovaný pes a můj nejbližší parťák.
          Díky němu jsem také objevil sport zvaný agility, ve kterém jsme jako
          tým dosáhli nemálo úspěchů. Mého zápalu pro kynologii si začalo všímat
          stále více lidí a mnoho z nich mě žádalo o rady. Já jim vždy nesmírně
          rád poradil. Postupně jsem začal nabízet i individuální lekce. Naučit
          lidi, jak porozumět svým psům a zlepšovat tak jejich vzájemný vztah,
          se stalo mou velkou motivací. Proto jsem se nakonec vzdal svého
          managerského povolání a věnuji se tomu, co umím ze všeho nejlíp. Nyní
          své schopnosti a zkušenosti ve výchově a tréninku psů nabízím široké
          veřejnosti, a tím můžu pomoci třeba i právě Vám k harmonickému soužití
          s Vaším čtyřnohým kamarádem.
        </Text>
      </TrainigContainer>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query AboutMeQuery {
    aboutMeJson {
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
