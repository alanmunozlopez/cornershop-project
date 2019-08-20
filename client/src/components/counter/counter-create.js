import React from 'react';

import './counter-create.css';

const CounterCreate = (props) => (
  <div className='counter-create'>
    <div className='counter-create-container'>
      <div className='counter-create-content'>
        <p> HOLA </p>
        <p> HOLA </p>
        <p> HOLA </p>
        <p> HOLA </p>
        <p> HOLA </p>
        <p> HOLA </p>
        <p> HOLA </p>
        <input
          id='title-count'
          className=''
          type="text"
          required='required'
          value={props.titleCounter}
          onChange={e => props.updateTitleCounter(e)}
          onKeyPress={props.pressEnter}
        />
        <button onClick={() => props.createCounter()}> CREATE </button>
        <button onClick={() => props.closeModal()}> CLOSE </button>
      </div>
    </div>
  </div>
);

export default CounterCreate;
