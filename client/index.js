import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './views/AppLayout';
import EmojiForm from './views/EmojiForm';
import NoFound from './views/NoFound';
import './index.css';
import './bootstrap-ubuntu.css';

ReactDOM.render(
  <Router history={browserHistory} >
    <Route component={AppLayout}>
      <Route path="/(custom/:UserText/:UserBg/:UserTextBg/:TextLength)" component={EmojiForm} />
      <Route path="*" component={NoFound} />
    </Route>
  </Router>
  , document.getElementById('root')
);
