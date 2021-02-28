import React from 'react';
import { css } from 'styled-components';
import Responsive from 'react-responsive';

import BREAKPOINTS from 'constants/breakpoints';

// This creates the media templates, which allows for simple
// breakpoint usage inside styled-components, e.g.:
//
// ${MEDIA.PHONE`
//   font-size: 1.6rem;
// `};
//
// ${MEDIA.MIN_TABLET`
//   display: flex;
// `};
//
// Edit or add breakpoints inside constants/breakpoints.js

const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  acc[`MIN_${label}`] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default MEDIA;

export const Mobile = props => (
  <Responsive {...props} maxWidth={BREAKPOINTS.MOBILE} />
);
export const Tablet = props => (
  <Responsive
    {...props}
    minWidth={BREAKPOINTS.MOBILE}
    maxWidth={BREAKPOINTS.TABLET}
  />
);
export const Desktop = props => (
  <Responsive {...props} minWidth={BREAKPOINTS.DESKTOP} />
);
