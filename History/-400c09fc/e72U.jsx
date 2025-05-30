import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [num, setNum] = useState(100);
  const [pause, setPause] = useState(false);

  function handleClick() {
    const timer = setInterval(() => {
      setNum(num--);
    }, 1000);
    if (pause) {
      timer();
    } else {
      clearInterval(timer);
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
