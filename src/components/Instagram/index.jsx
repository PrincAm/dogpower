import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Title from '../Title';

import ThemeContext from '../../store/theme';

const Background = styled.div`
  background-color: #fff;
  padding: 6rem 0;
`;

const Container = styled.div`
  color: ${({ theme }) => theme.colorDarkSec};
  margin: 0 auto;
  max-width: 1000px;
`;

const TitleWrapper = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colorSecondary};
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: #4f868e;
  }
`;

const Instagram = () => {
  const theme = useContext(ThemeContext);
  useEffect(async () => {
    const result = await axios('https://www.instagram.com/dogpower.cz/?__a=1');
    if (result) {
      console.log(result);
      const edges = result.graphql.user.edge_owner_to_timeline_media.edges;
      const postCodes = edges.map(edge => edge.node.shortcode);
    }
  });
  return (
    <Background theme={theme}>
      <Container theme={theme}>
        <TitleWrapper>
          <Title size="xxlarge" as="h2">
            Sledujte{' '}
            <Link
              href="https://www.instagram.com/dogpower.cz"
              target="_blank"
              rel="noreferrer"
            >
              @dogpower.cz
            </Link>{' '}
            na Instagramu
          </Title>
        </TitleWrapper>
      </Container>
    </Background>
  );
};

export default Instagram;
