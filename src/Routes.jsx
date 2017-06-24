import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import NotFound from './components/NotFound';

const Routes = ({ Router, location, context }) => (
  <Router location={location} context={context}>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

Routes.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired
};

export default Routes;
