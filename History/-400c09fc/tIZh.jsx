import { useState } from 'react';

function Timer() {
  const [num, setNum] = useState(100);
  const [pause, setPause] = useState(true);

  function decreaseSecond() {
    if (!pause) setNum(prev => prev--);
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <span>{num}</span>
      <button
        style={{
          padding: '1rem 2rem ',
          fontSize: '2rem',
          borderRadius: '130px',
          border: 'none',
        }}
      >
        {pause ? 'Start' : 'Pause'}
      </button>
    </div>
  );
}

export default Timer;
