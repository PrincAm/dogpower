import React, { forwardRef, useContext } from 'react';
import styled from 'styled-components';

import Panel from './Panel';
import { texts } from './data/texts';
import ThemeContext from '../../store/theme';
import MEDIA, { Mobile, Tablet, Desktop } from '../../helpers/mediaTemplates';

const Background = styled.div`
  background-color: #fff;
`;
const TrainingContainer = styled.div`
  padding: 12rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colorDarkSec};
  max-width: ${({ theme }) => theme.width};
  margin: 0 auto;
  // FIXME unify colors, store to theme
  background-color: #fff;//${({ theme }) => theme.colorLight};
  ${MEDIA.MOBILE`
    padding: 5rem 2rem;
 `};
`;

// eslint-disable-next-line react/display-name
const Training = forwardRef(({ data }, ref) => {
  const theme = useContext(ThemeContext);
  return (
    <Background>
      <TrainingContainer ref={ref} theme={theme}>
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
      </TrainingContainer>
    </Background>
  );
});

export default Training;
