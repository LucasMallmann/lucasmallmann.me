import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from '~/styles/global';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <div>{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
