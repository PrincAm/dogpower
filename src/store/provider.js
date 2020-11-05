import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext, { theme } from './theme';

// The provider, which holds the page-wide store and its actions.
const AppProvider = ({ children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
