import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import useRelay from 'react-router-relay';
import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router';
import AppLayout from './views/AppLayout';
import EmojiForm from './views/EmojiForm';
import NoFound from './views/NoFound';
import './index.css';
import './bootstrap-ubuntu.css';

// Relay.injectNetworkLayer(
//   new Relay.DefaultNetworkLayer('')
// );
//
// const ViewerQueries = { viewer: () => Relay.QL`query { viewer }` };
// (custom/:UserText/:UserBg/:UserTextBg/:TextLength)
ReactDOM.render(
  <Router
    forceFetch
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}
  >
    <Route component={AppLayout}>
      <Route path="/(custom/:UserText/:UserBg/:UserTextBg/:TextLength)" component={EmojiForm} />
      <Route path="/about" component={EmojiForm} />
      <Route path="*" component={NoFound} />
    </Route>
  </Router>
  , document.getElementById('root'), // eslint-disable-line no-undef
);
