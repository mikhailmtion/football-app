import React from 'react';

function DayCard({ day, setDayCurrent, dayCurrent }) {
  return (
    <div
      className={dayCurrent === day ? ' daycard daycard__active' : 'daycard'}
      onClick={() => setDayCurrent(day)}
    >
      <div className={'daycard__day'}>
        <b>{day}</b>
      </div>
    </div>
  );
}

export default DayCard;
