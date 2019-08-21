import React from 'react';
import './floating-button.css';
import plusIconAlone from "../../assets/icons/plus_icon_alone.svg";

const FloatingButton = (props) => (
  <div className='floating-button'>
    <button onClick={props.handleModalCreateCounter} className='float'>
      <img className='floating-button-icon' src={plusIconAlone} alt='plus icon create' />
    </button>
    <div className='label-container'>
      <div className='label-text'>Add</div>
      <i className='fa fa-play label-arrow'></i>
    </div>
  </div>
);

export default FloatingButton;
