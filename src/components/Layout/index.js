import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from '~/styles/global';

import Header from '~/components/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <div>{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
