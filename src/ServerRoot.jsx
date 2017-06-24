import React from 'react';
import PropTypes from 'prop-types';
import Routes from './Routes';

const ServerRoot = ({ Router, location, context }) => (
  <Router location={location} context={context}>
    <Routes />
  </Router>
);

ServerRoot.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired
};

export default ServerRoot;
