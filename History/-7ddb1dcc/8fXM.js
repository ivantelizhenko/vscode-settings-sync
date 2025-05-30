import { useEffect } from 'react';

function Timer({ dispatch, seconds }) {
  const time = `${seconds / 60}:${seconds % 60}`;

  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: 'timer' });
      }, 1000);
    },
    [dispatch]
  );

  return <div className="timer">05:00</div>;
}

export default Timer;
