import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as countersActions from '../../store/actions/countersActions';
import CounterView from "../counter/counter-view";
import CounterCreate from '../counter/counter-create';

class HomeContainer extends Component {

  componentDidMount() {
    this.props.getCounters();
  }

  handleIncrement = (id) => {
    this.props.incrementCounter(id);
  };

  handleDecrement = (id, actualCounter) => {
    if (actualCounter > 0)
      this.props.decrementCounter(id, actualCounter);
  };

  handleCreateCounter = () => {
    this.props.createCounter('PABLO');
  };
  handleModalCreateCounter = () => {

  };

  render() {
    return <section>
      <CounterCreate
        createCounter={this.handleCreateCounter}
      />
      <p> hey </p>
      <button onClick={this.handleModalCreateCounter}> CREATE COUNTER </button>
      {
        this.props.counters ?
        Object.keys(this.props.counters).map((key) => (
          <CounterView
            {...this.props.counters[key]}
            key={key}
            increment={this.handleIncrement}
            decrement={this.handleDecrement}
          />
        )) : null
      }
    </section>;
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, countersActions)(HomeContainer);
