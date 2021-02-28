import React from 'react';
import PropTypes from 'prop-types';

import Head from 'components/Head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GlobalStyle from 'global.css.js';

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
