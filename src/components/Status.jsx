import React from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext) {
      staticContext.status = code; // eslint-disable-line no-param-reassign
    }

    return children;
  }}
  />
);

Status.propTypes = {
  code: PropTypes.number,
  children: PropTypes.node
};

Status.defaultProps = {
  code: 200,
  children: null
};

export default Status;
