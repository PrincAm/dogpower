import React, { useContext } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout';
import Text from 'components/Text';
import ThemeContext from '../store/theme';
import MEDIA from '../helpers/mediaTemplates';

const Container = styled.div`
  min-height: 100vh;
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
  margin-bottom: 3rem;
  width: 100%;
  max-height: 30rem;
`;

const TextContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 3rem;
`;

const About = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <Container theme={theme}>
        <Title size="xxlarge" as="h1">
          O mně
        </Title>
        <ImageContainer>
          <StaticImage
            src="../../content/images/training/dogpower2.jpg"
            alt="black dog"
            placeholder="blurred"
            layout="constrained"
            imgStyle={{ borderRadius: '10px' }}
          />
        </ImageContainer>
        <TextContainer>
          <Text as="p">
            Jmenuji se Jakub Slavík a rád bych se Vám prostřednictvím tohoto
            textu představil. V mé rodině se vášeň pro přírodu, a zejména pro
            trénování psů, dědí po generace. Tak jsem se mohl již od útlého věku
            učit porozumět těmto úžasným tvorům a zdokonalovat se v jejich
            výcviku. Za můj život u mé nohy kráčelo už několik věrných psích
            kamarádů a jak plynul čas, z koníčku se stával životní styl. Nyní je
            důležitou součástí mého životního stylu i cestování, ale ani při
            mých toulkách světem mě zvídavost neopouští a třeba i v
            nejodlehlejších částech Asie pozoruji přirozené chování psů ve
            smečkách žijících na ulicích anebo jejich soužití s člověkem v
            rozdílných kulturních podmínkách. I tím se snažím obohatit svoje
            vědomosti z oboru kynologie a získané zkušenosti následně aplikuji
            při výchově a tréninku. Svého současného psa Darwina jsem potkal v
            jeho 2 letech. Byl to zanedbaný, bázlivý a absolutně nesocializovaný
            pes, který všechny i zdánlivě banální situace řešil vrčením nebo
            napadáním lidí. Věnoval jsem mu každou volnou chvilku a jeho pokrok
            byl neskutečný. Spolu s ním rostly i mé znalosti a zdokonalovala se
            má schopnost „vžít se“ do psí mysli. Po necelém roce se z Darwina
            stal spolehlivý a vychovaný pes a můj nejbližší parťák. Díky němu
            jsem také objevil sport zvaný agility, ve kterém jsme jako tým
            dosáhli nemálo úspěchů. Mého zápalu pro kynologii si začalo všímat
            stále více lidí a mnoho z nich mě žádalo o rady. Já jim vždy
            nesmírně rád poradil. Postupně jsem začal nabízet i individuální
            lekce. Naučit lidi, jak porozumět svým psům a zlepšovat tak jejich
            vzájemný vztah, se stalo mou velkou motivací. Proto jsem se nakonec
            vzdal svého managerského povolání a věnuji se tomu, co umím ze všeho
            nejlíp. Nyní své schopnosti a zkušenosti ve výchově a tréninku psů
            nabízím široké veřejnosti, a tím můžu pomoci třeba i právě Vám k
            harmonickému soužití s Vaším čtyřnohým kamarádem.
          </Text>
        </TextContainer>
      </Container>
    </Layout>
  );
};

export default About;
