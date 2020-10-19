import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const Title = ({ children, as = 'span', size }) => (
  <Text as={as} size={size}>
    {children}
  </Text>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};

export default Title;
