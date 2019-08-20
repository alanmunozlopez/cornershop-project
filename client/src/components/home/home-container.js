import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
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
    this.props.createCounter(this.props.modal.titleCounter);
    this.handleCloseModalCreateCounter();
  };
  handleModalCreateCounter = () => {
    this.props.modal.titleCounter = '';
    this.props.onModal();
  };
  handleCloseModalCreateCounter = () => this.props.offModal();

  handlePressEnter = (event) => {
    if (event.key === 'Enter') {
     this.handleCreateCounter();
    }
  };

  render() {
    console.log(this.props);
    return <section>
      {
        !this.props.modal.isOpen ?
        null :
        <CounterCreate
          createCounter={this.handleCreateCounter}
          closeModal={this.handleCloseModalCreateCounter}
          titleCounter={this.props.modal.titleCounter}
          pressEnter={this.handlePressEnter}
          updateTitleCounter={this.props.updateTitleCounter}
        />
      }
      <p> hey </p>
      <button onClick={this.handleModalCreateCounter}> CREATE COUNTER </button>
      {
        !this.props.counters ?
        null :
        Object.keys(this.props.counters).map((key) => (
          <CounterView
            {...this.props.counters[key]}
            key={key}
            increment={this.handleIncrement}
            decrement={this.handleDecrement}
            delete={this.props.deleteCounter}
          />
        ))
      }
    </section>;
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actions)(HomeContainer);
