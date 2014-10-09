/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');

var HomePage = React.createClass({
  getDefaultProps() {
    return {
      title: 'React.js Starter Kit',
      description: 'A skeleton for a web application built with Facebook\'s React.js Library'
    };
  },
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        "Test"
      </DefaultLayout>
    );
  }
});

module.exports = HomePage;
