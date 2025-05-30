import { useEffect } from 'react';

function Timer({ dispatch, seconds }) {
  if (seconds <= 0) {
    clearInterval();
    dispatch({ type: 'finish' });
  }

  const time = `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? '0' : ''}${
    seconds % 60
  }`;

  useEffect(function () {
    setInterval(function () {
      dispatch({ type: 'timer' });
    }, 1000);
  }, []);

  return <div className="timer">{time}</div>;
}

export default Timer;
