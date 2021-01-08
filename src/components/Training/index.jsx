import React, { forwardRef, useContext } from 'react';
import styled from 'styled-components';

import Panel from './Panel';
import { texts } from './data/texts';
import ThemeContext from '../../store/theme';

const TrainingContainer = styled.div`
  padding: 12rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colorDarkSec};
  // FIXME unify colors, store to theme
  background-color: #fff;//${({ theme }) => theme.colorLight};
`;

// eslint-disable-next-line react/display-name
const Training = forwardRef(({ data }, ref) => {
  const theme = useContext(ThemeContext);
  return (
    <TrainingContainer ref={ref} theme={theme}>
      <Panel texts={texts} imageFluid={data.dog1Img.childImageSharp.fluid} />
      <Panel
        texts={texts}
        imageFluid={data.dog2Img.childImageSharp.fluid}
        imageOnLeft={false}
      />
      <Panel texts={texts} imageFluid={data.dog3Img.childImageSharp.fluid} />
    </TrainingContainer>
  );
});

export default Training;
