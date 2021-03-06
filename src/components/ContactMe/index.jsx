import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Text from '../Text';
import MEDIA from '../../helpers/mediaTemplates';

import Boop from '../Boop';

import ThemeContext from '../../store/theme';

const Background = styled.div`
  background-color: #ff3860;
  color: ${({ theme }) => theme.colorLight};}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width};
  text-align: center;
  padding: 10rem 0;

  ${MEDIA.TABLET`
    padding: 5rem 5rem;
 `};
  ${MEDIA.MOBILE`
    padding: 5rem 2rem;
 `};
`;

const TitleWrapper = styled.div`
  margin-bottom: 4rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.colorLight};}
  transition: color 0.2s ease;

  &:hover {
    color: #FFDC80;
    text-decoration: underline;
  }
`;

const ContactMe = () => {
  const theme = useContext(ThemeContext);

  return (
    <Background theme={theme}>
      <Container theme={theme}>
        <TitleWrapper>
          <Text size="xxlarge" as="h2">
            Pojďme si popovídat
          </Text>
        </TitleWrapper>
        <Text size="medium" as="p">
          Neváhejte a obraťte se na mě. Velmi rád uslyším, jak vám můžu být
          nápomocen s vaším psím kamarádem.
        </Text>
        <ButtonWrapper>
          <ContactLink to="/kontakt" theme={theme}>
            <Boop x={10}>
              <Text size="large">Zeptejte se na cokoliv</Text>
            </Boop>
          </ContactLink>
        </ButtonWrapper>
      </Container>
    </Background>
  );
};

export default ContactMe;
