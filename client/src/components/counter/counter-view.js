import React from 'react';

const CounterView = (props) => (
  <div>
    <h3> {props.title} </h3>
    <p> {props.count}</p>
    <button type='button' onClick={() => props.increment(props.id)}> + </button>
    <button type='button' onClick={() => props.decrement(props.id, props.count)}> - </button>
  </div>
);

export default CounterView;
