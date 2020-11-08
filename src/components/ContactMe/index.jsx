import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Text from '../Text';
import Title from '../Title';

const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
  margin-bottom: 3rem;
`;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactButton = styled(Link)`
  background-color: #ffffff;
  color: #1d2120;
  border-radius: 4px;
  padding: 0.6em 1.5em;
  font-weight: 600;
  width: 9rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const ContactMe = () => (
  <ContactMeContainer>
    <TitleWrapper>
      <Title size="large">Pojďme si popovídat o vašem psím kamarádovi</Title>
    </TitleWrapper>
    <Text size="medium" as="p">
      Neváhejte a obraťte se na mě. Velmi rád uslyším, jak vám můžu být
      nápomocen. // PLACEHOLDER pro text
    </Text>
    <ButtonWrapper>
      <ContactButton to="/contact">Kontakt</ContactButton>
    </ButtonWrapper>
  </ContactMeContainer>
);

export default ContactMe;
