import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [num, setNum] = useState(100);
  const [pause, setPause] = useState(false);

  function handleClick() {
    if (pause) {
      setInterval(() => {
        setNum(num--);
      }, 1000);
    } else {
      clearInterval();
    }
  }
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <span>{num}</span>
      <button onClick={handleClick}>{pause ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default Timer;
