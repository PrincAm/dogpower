import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Text from '../Text';
import MEDIA from '../../helpers/mediaTemplates';

import Boop from '../Boop';

import ThemeContext from '../../store/theme';

const Background = styled.div`
  background-image: ${({ hasSecondaryBg, theme }) =>
    `radial-gradient(#ff3860 1px, ${
      hasSecondaryBg ? theme.backgroundSecondary : theme.background
    } 1px)`};
  background-size: 20px 20px;
  padding: 10rem 0 10rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width};
  text-align: center;
  padding: 5rem 0;
  border-radius: 20px;

  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0 80px 100px -25px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

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
  color: ${({ theme }) => theme.linkColor};
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactMe = ({ hasSecondaryBg = true }) => {
  const theme = useContext(ThemeContext);

  return (
    <Background theme={theme} hasSecondaryBg={hasSecondaryBg}>
      <Container theme={theme}>
        <TitleWrapper>
          <Text size="xl" as="h1">
            Pojďme si popovídat
          </Text>
        </TitleWrapper>
        <Text size="md" as="p">
          Neváhejte a obraťte se na mě. Velmi rád uslyším, jak vám můžu být
          nápomocen s vaším psím kamarádem.
        </Text>
        <ButtonWrapper>
          <ContactLink to="/kontakt" theme={theme}>
            <Boop x={10}>
              <Text size="l">Zeptejte se na cokoliv</Text>
            </Boop>
          </ContactLink>
        </ButtonWrapper>
      </Container>
    </Background>
  );
};

export default ContactMe;

ContactMe.propTypes = {
  hasSecondaryBg: PropTypes.bool,
};
