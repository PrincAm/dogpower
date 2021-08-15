import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Marker = () => (
  <StaticImage
    src="../../../content/images/logo-black.png"
    alt="jumping dog"
    placeholder="blurred"
    style={{ width: '10rem' }}
  />
);

export default Marker;
