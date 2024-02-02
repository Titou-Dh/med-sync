import React, { useState, useEffect } from 'react';

const LiveClockUpdate = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour24: true,
  }).format(currentTime);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(currentTime);

  return (
    <div className="bg-white border-slate-300 rounded-lg flex items-center px-4 my-2">
      <h2>{formattedTime}{formattedDate}</h2>
    </div>
  );
};

export default LiveClockUpdate;
