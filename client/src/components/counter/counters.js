import React from 'react';
import './counters.css';
import CounterView from "./counter-view";

const Counters  = (props) => (
  <div className='counters'>
    {
      Object.keys(props.counters).map((key) => (
        <CounterView
          {...props.counters[key]}
          key={key}
          increment={props.handleIncrement}
          decrement={props.handleDecrement}
          delete={props.deleteCounter}
        />
      ))
    }
  </div>
);

export default Counters;
