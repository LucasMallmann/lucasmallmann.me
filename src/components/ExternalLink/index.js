import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const ExternalLink = ({ decorated, children, color, ...rest }) => (
  <Container decorated={decorated} {...rest} color={color}>
    {children}
  </Container>
);

ExternalLink.defaultProps = {
  decorated: false,
  color: 'rgba(169, 151, 223, 1)',
};

ExternalLink.propTypes = {
  decorated: PropTypes.bool,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default ExternalLink;
