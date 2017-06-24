import React from 'react';
import { Switch, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);
