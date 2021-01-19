import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Text from '../Text';
import Title from '../Title';

import Boop from '../Boop';

import ThemeContext from '../../store/theme';

const Container = styled.div`
  background-color: #ff3860;
  color: ${({ theme }) => theme.colorLight};}
  padding: 10rem 0;
`;

// TODO rename or merge with Container
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
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
  transition: color 0.5s ease;

  &:hover {
    color: #4f868e;
  }
`;

const ContactMe = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Flex>
        <TitleWrapper>
          <Title size="xxlarge" as="h2">
            Pojďme si popovídat
          </Title>
        </TitleWrapper>
        <Text size="medium" as="p">
          Neváhejte a obraťte se na mě. Velmi rád uslyším, jak vám můžu být
          nápomocen s vaším psím kamarádem.
        </Text>
        <ButtonWrapper>
          <ContactLink to="/contact" theme={theme}>
            <Boop x={10}>
              <Text size="large">Zeptejte se na cokoliv</Text>
            </Boop>
          </ContactLink>
        </ButtonWrapper>
      </Flex>
    </Container>
  );
};

export default ContactMe;
