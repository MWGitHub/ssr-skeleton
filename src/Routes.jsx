import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

const Routes = ({ Router, location, context }) => (
  <Router location={location} context={context}>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  </Router>
);

Routes.propTypes = {
  Router: PropTypes.object.isRequired, // eslint-disable-line
  location: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired // eslint-disable-line
};

export default Routes;
