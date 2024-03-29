import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, a } from 'react-spring';
import { GatsbyImage } from 'gatsby-plugin-image';

const Image = ({ isVisible, image, translateYFrom, translateYTo, altText }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (!isDisplayed && isVisible) {
      setIsDisplayed(true);
    }
  }, [isVisible, isDisplayed]);

  const props = useSpring({
    config: { mass: 15, tension: 200, friction: 100 },
    opacity: isDisplayed ? 1 : 0,
    transform: isDisplayed
      ? `translate3d(0,${translateYTo},0)`
      : `translate3d(0,${translateYFrom},0)`,
  });

  return (
    <a.div style={props}>
      <GatsbyImage
        image={image}
        imgStyle={{ borderRadius: '10px' }}
        alt={altText}
      />
    </a.div>
  );
};

export default Image;

Image.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  image: PropTypes.shape({}).isRequired,
  altText: PropTypes.string.isRequired,
  translateYFrom: PropTypes.string,
  translateYTo: PropTypes.string,
};
