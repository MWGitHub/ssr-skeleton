import React from 'react';
import PropTypes from 'prop-types';

const Root = ({ children }) => (
  <html lang="en">
    <head>
      <title>Group Radio</title>
    </head>
    <body>
      <div id="app">
        {children}
      </div>
      <script src="/dist/client.bundle.js" />
    </body>
  </html>
);

Root.propTypes = {
  children: PropTypes.node.isRequired
};

export default Root;
