import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';

import Panel from './Panel';
import { texts } from './data/texts';
import ThemeContext from '../../store/theme';
import MEDIA from '../../helpers/mediaTemplates';

const Background = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
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
const PanelDesktopWrapper = styled.div`
  ${MEDIA.TABLET`
    display: none;
 `};
  ${MEDIA.MOBILE`
    display: none;
 `};
`;
const PanelMobileWrapper = styled.div`
  display: none;
  ${MEDIA.TABLET`
    display: block;
 `};
  ${MEDIA.MOBILE`
    display: block;
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
        <PanelDesktopWrapper>
          <Panel texts={texts} image={image2} imageOnLeft={false} />
        </PanelDesktopWrapper>
        <PanelMobileWrapper>
          <Panel texts={texts} image={image2} />
        </PanelMobileWrapper>
        <Panel texts={texts} image={image3} />
      </Container>
    </Background>
  );
});

export default Training;

Training.propTypes = {
  data: PropTypes.shape({
    photo1: PropTypes.shape({}),
    photo2: PropTypes.shape({}),
    photo3: PropTypes.shape({}),
  }),
};
