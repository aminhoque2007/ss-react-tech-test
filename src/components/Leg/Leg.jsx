import React from 'react';

import { getHoursMins, getFlightTime, getStops } from '../utils.js';
import { ReactComponent as ArrowRight } from './long-arrow-right.svg';

import STYLES from './Leg.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const Leg = ({ leg }) => {
  return (
    <div className={getClassName('leg')}>
      <img
        className={getClassName('leg__agent-icon')}
        src={`https://logos.skyscnr.com/images/airlines/favicon/${leg.airline_id}.png`}
      />
      <div className={getClassName('leg__flight-info')}>
        <div className={getClassName('leg__flight-time')}>
          {getFlightTime(leg.departure_time)}
        </div>
        <div className={getClassName('leg__flight-airport')}>
          {leg.departure_airport}
        </div>
      </div>

      <ArrowRight style={{ fill: '#7f7f7f', width: '20px' }} />
      <div className={getClassName('leg__flight-info--margin-left-s')}>
        <div className={getClassName('leg__flight-time')}>
          {getFlightTime(leg.arrival_time)}
        </div>
        <div className={getClassName('leg__flight-airport')}>
          {leg.arrival_airport}
        </div>
      </div>
      <div className={getClassName('leg__flight-info--pull-right')}>
        <div className={getClassName('leg__flight-duration')}>
          {getHoursMins(leg.duration_mins)}
        </div>
        <div className={getClassName('leg__flight-stops')}>
          {getStops(leg.stops)}
        </div>
      </div>
    </div>
  );
};

export default Leg;
