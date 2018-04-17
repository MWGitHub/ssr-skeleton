import React from 'react';
import ReactDOM from 'react-dom';
import Inner from './containers/Inner';

ReactDOM.hydrate(<Inner />, document.getElementById('app')); // eslint-disable-line no-undef
