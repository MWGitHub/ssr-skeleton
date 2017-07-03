import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './route-config';

export default () => (
  <Switch>
    {routes.map(route => (
      <Route {...route} key={`route-${route.path}`} />
    ))}
  </Switch>
);
