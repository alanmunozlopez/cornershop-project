import React from 'react';
import {connect} from "react-redux";
import * as R from 'ramda';
import './header-view.css';

const Header = (props) => (
  <div className="header">
    <h3>counter app</h3>
    <h3> total count: {props.total} </h3>
  </div>
);

const totalCounters = R.compose(R.sum, R.map(R.prop('count')), R.values);

const mapStateToProps = ({ counters }) => {
  return { total: totalCounters(counters) };
};

export default connect(mapStateToProps)(Header);
