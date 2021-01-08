import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Text from '../Text';
import Title from '../Title';

import ThemeContext from '../../store/theme';
import ArrowIcon from '../../images/arrow-right-regular.svg';

const Container = styled.div`
  background-color: #ff3860;
  padding: 6rem 0;
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
  &:hover {
    cursor: pointer;
  }
`;

// TODO replace by nicer arrow
const Arrow = styled(ArrowIcon)`
  height: 4rem;
  width: 4rem;
  margin-left: 1rem;
`;

const ContactMe = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
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
            <Text size="large">Zeptejte se na cokoliv</Text>
            <Arrow />
          </ContactLink>
        </ButtonWrapper>
      </Flex>
    </Container>
  );
};

export default ContactMe;
