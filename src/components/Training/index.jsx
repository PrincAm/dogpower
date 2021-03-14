import React, { forwardRef, useContext } from 'react';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';

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
  const image1 = getImage(data.photo1);
  const image2 = getImage(data.photo2);
  const image3 = getImage(data.photo3);
  return (
    <Background theme={theme}>
      <Container ref={ref} theme={theme}>
        <Panel texts={texts} image={image1} />
        <Desktop>
          <Panel texts={texts} image={image2} imageOnLeft={false} />
        </Desktop>
        <Mobile>
          <Panel texts={texts} image={image2} />
        </Mobile>
        <Tablet>
          <Panel texts={texts} image={image2} />
        </Tablet>
        <Panel texts={texts} image={image3} />
      </Container>
    </Background>
  );
});

export default Training;
