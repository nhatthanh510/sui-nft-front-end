import React from 'react';

import Countdown from 'react-countdown';
import { FiClock } from 'react-icons/fi';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return null;
  } else {
    // Render a countdown
    return (
      <span className="flex flex-row items-center gap-2 text-sm font-medium text-white">
        <FiClock className="text-xl" />
        {days ? days + 'd' : ''} {hours ? hours + 'h' : ''} {minutes ? minutes + 'm' : ''}{' '}
        {seconds ? seconds + 's' : ''}
      </span>
    );
  }
};

export default function CountdownItem({ time }) {
  return <Countdown date={time} renderer={renderer} />;
}
