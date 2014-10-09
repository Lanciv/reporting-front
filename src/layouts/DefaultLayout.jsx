/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Navbar = require('../components/Navbar.jsx');

var DefaultLayout = React.createClass({
  render() {
    console.log(this.props.activeRouteHandler)
    return (
      <div>
        <Navbar />
        <div className="app container">
          <this.props.activeRouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = DefaultLayout;
