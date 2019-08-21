import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import CounterCreateModal from '../counter/counter-create-modal';
import Counters from "../counter/counters";
import FloatingButton from "../floating-button/floating-button";

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
    if(this.props.modal.titleCounter === '') {
      return;
    }
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
    return <section>
      {
        !this.props.modal.isOpen ?
        null :
        <CounterCreateModal
          createCounter={this.handleCreateCounter}
          closeModal={this.handleCloseModalCreateCounter}
          titleCounter={this.props.modal.titleCounter}
          pressEnter={this.handlePressEnter}
          updateTitleCounter={this.props.updateTitleCounter}
        />
      }
      {
        !this.props.counters ?
        null :
        <Counters
          counters={this.props.counters}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          deleteCounter={this.props.deleteCounter}
        />
      }
      <FloatingButton
        handleModalCreateCounter={this.handleModalCreateCounter}
      />
    </section>;
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actions)(HomeContainer);
