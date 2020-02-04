import React from 'react';
import BpkButton from 'bpk-component-button';

import Leg from '../Leg';

import STYLES from './Itinerary.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const Itinerary = ({ agent, legs, price, ...rest }) => {
  return (
    <div className={getClassName('Itinerary')}>
      {legs.map((leg, i) => (
        <Leg key={`leg-${i}`} leg={leg} {...rest} />
      ))}
      <div className={getClassName('Itinerary__details-container')}>
        <div className={getClassName('Itinerary__details')}>
          <div className={getClassName('Itinerary__price')}>{price}</div>
          <div className={getClassName('Itinerary__agent')}>{agent}</div>
        </div>
        <BpkButton>Select</BpkButton>
      </div>
    </div>
  );
};

export default Itinerary;
