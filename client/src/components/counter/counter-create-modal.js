import React from 'react';

import './counter-create.css';

const CounterCreateModal = (props) => (
  <div className='counter-create'>
    <div className='counter-create-container'>
      <div className='counter-create-content'>
        <h1> Create Counter </h1>
        <div className='material_input'>
          <input
            id='title-count'
            className=''
            type="text"
            required='required'
            value={props.titleCounter}
            onChange={e => props.updateTitleCounter(e)}
            onKeyPress={props.pressEnter}
          />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label id='mla'>Title</label>
        </div>

        <button
          className='counter-create-content-create'
          onClick={() => props.createCounter()}
        >
          CREATE
        </button>
        <button
          className='counter-create-content-cancel'
          onClick={() => props.closeModal()}
        >
          CANCEL
        </button>
      </div>
    </div>
  </div>
);

export default CounterCreateModal;
