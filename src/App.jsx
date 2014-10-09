/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;

(window !== window.top ? window.top : window).React = React;


var DefaultLayout = require('./layouts/DefaultLayout.jsx');
var HomePage = require('./pages/Index.jsx');
var QueryPage = require('./pages/Query.jsx');

var routes = (
  <Routes>
    <Route handler={DefaultLayout}>
      <DefaultRoute handler={HomePage} />
      <Route name="query" path="query" handler={QueryPage} />

    </Route>
  </Routes>
);

React.renderComponent(routes, document.body);
