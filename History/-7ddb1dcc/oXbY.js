import { useEffect } from 'react';

function Timer({ dispatch, seconds }) {
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
