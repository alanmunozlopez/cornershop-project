import React from 'react';
import './counter-view.css';

import lessIcon from '../../assets/icons/less.svg';
import plusIcon from '../../assets/icons/plus.svg';
import trashIcon from '../../assets/icons/trash.svg';
import avocadoImage from '../../assets/images/avocado.png';

const CounterView = (props) => (
  <div className='counter-view-card'>
    <div className='counter-view-card-image'>
      <figure className='post-image'>
        <img
          src={avocadoImage}
          alt='avocado'
        />
      </figure>
    </div>
    <div className='counter-view-card-details'>
      <p className='counter-view-card-details-title'> { props.title } </p>
      <img
        className='counter-view-card-details-less'
        src={lessIcon}
        alt='icon less'
        onClick={() => props.decrement(props.id, props.count)}
      />
      <p className='counter-view-card-details-count'> { props.count } </p>
      <img
        className='counter-view-card-details-more'
        src={plusIcon}
        alt='icon more'
        onClick={() => props.increment(props.id)}
      />
      <img
        className='counter-view-card-details-delete'
        src={trashIcon}
        alt='trash icon'
        onClick={() => props.delete(props.id)}
      />
    </div>
  </div>
);

export default CounterView;
