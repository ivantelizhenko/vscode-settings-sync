import { useEffect } from 'react';

function Timer({ dispatch, seconds }) {
  const time = `${(seconds / 60).toFixed(0)}`;

  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: 'timer' });
      }, 1000);
    },
    [dispatch]
  );

  return <div className="timer">{time}</div>;
}

export default Timer;
