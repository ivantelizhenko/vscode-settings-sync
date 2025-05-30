import { useEffect, useState } from 'react';

function Timer() {
  const [num, setNum] = useState(100);
  const [pause, setPause] = useState(true);

  function decreaseSeconds() {
    if (!pause) setNum(prev => prev--);
  }

  useEffect(() => {
    setInterval(decreaseSeconds, 1000);
    console.log(pause);
  }, [pause]);

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
        onClick={() => {
          setPause(curPause => !curPause);
        }}
      >
        {pause ? 'Start' : 'Pause'}
      </button>
    </div>
  );
}

export default Timer;
