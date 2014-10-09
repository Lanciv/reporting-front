/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Griddle = require('Griddle/scripts/griddle.jsx');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');

var fakeData =  [
  {
    "id": 0,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 1,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  }
];


var Query = React.createClass({
  getDefaultProps() {
    return {
      title: 'Query Runner',
      description: ''
    };
  },

  runQuery() {

  },
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>
          <label>Query</label>
          <textarea rows="5" defaultValue="select * from Rpt_ActiveJobs" />
          <a onClick={this.runQuery}>
            Run
          </a>
        </div>
        <div>
          <Griddle results={fakeData} tableClassName="table"/>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = Query;
