import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Dashboard from '../ui/Dashboard';
import Login from '../ui/Login';
import NotFound from '../ui/NotFound';
import SignUp from '../ui/SignUp';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

// Redirect Destinations
const unauthenticatedLandingPage = '/';
const authenticatedLandingPage = '/dashboard';


const onEnterPublicPage = () => {
  if (Meteor.userId()){
    browserHistory.replace(authenticatedLandingPage);
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace(unauthenticatedLandingPage);
  }
};
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isAuthenticated && isUnauthenticatedPage) {
    browserHistory.replace(authenticatedLandingPage);
  } else if (!isAuthenticated && isAuthenticatedPage) {
    browserHistory.replace(unauthenticatedLandingPage);
  }
};

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/signup" component={SignUp} onEnter={onEnterPublicPage} />
    <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage} />
    <Route path="*" component={NotFound} />
  </Router>
);

