import { useState } from 'react';

function Timer() {
  const [num, setNum] = useState();

  return (
    <div>
      <span>{num}</span>
    </div>
  );
}

export default Timer;
