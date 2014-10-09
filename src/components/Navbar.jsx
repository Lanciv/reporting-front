/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('react-router').Link;

var Navbar = React.createClass({
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <ul className="nav navbar-nav">
            <Link to="/">Home</Link>
            <Link to="/query">Query</Link>
            <Link to="/privacy">Privacy</Link>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
