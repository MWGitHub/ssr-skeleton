import React from 'react';
import Status from './Status';

const NotFound = () => (
  <Status code={404}>
    <h1>Page Not Found</h1>
  </Status>
);

export default NotFound;
