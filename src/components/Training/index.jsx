import React, { forwardRef, useContext } from 'react';
import styled from 'styled-components';

import Panel from './Panel';
import { texts } from './data/texts';
import ThemeContext from '../../store/theme';
import MEDIA, { Mobile, Tablet, Desktop } from '../../helpers/mediaTemplates';

const Background = styled.div`
  background-color: #fff;
  color: ${({ theme }) => theme.colorDarkSec};
`;
const Container = styled.div`
  padding: 10rem 0 7rem 0;
  display: flex;
  flex-direction: column;

  max-width: ${({ theme }) => theme.width};
  margin: 0 auto;

  ${MEDIA.MOBILE`
    padding: 5rem 2rem;
 `};
`;

// eslint-disable-next-line react/display-name
const Training = forwardRef(({ data }, ref) => {
  const theme = useContext(ThemeContext);
  return (
    <Background theme={theme}>
      <Container ref={ref} theme={theme}>
        <Panel texts={texts} imageFluid={data.dog1Img.childImageSharp.fluid} />
        <Desktop>
          <Panel
            texts={texts}
            imageFluid={data.dog2Img.childImageSharp.fluid}
            imageOnLeft={false}
          />
        </Desktop>
        <Mobile>
          <Panel
            texts={texts}
            imageFluid={data.dog2Img.childImageSharp.fluid}
          />
        </Mobile>
        <Tablet>
          <Panel
            texts={texts}
            imageFluid={data.dog2Img.childImageSharp.fluid}
          />
        </Tablet>
        <Panel texts={texts} imageFluid={data.dog3Img.childImageSharp.fluid} />
      </Container>
    </Background>
  );
});

export default Training;
