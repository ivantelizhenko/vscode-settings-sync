import { useEffect } from 'react';

function Timer({ dispatch, seconds }) {
  const mins = Math.floor(seconds / 60);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: 'timer' });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return <div className="timer">{time}</div>;
}

export default Timer;
