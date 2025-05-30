import { useRef, useState } from 'react';

function TryMemo() {
  const [number, setNumber] = useState();
  const [isRender, setIsRender] = useState(false)
  const renders = useRef();



  return (
    <div>
      <MemoComponent number={number} />
      <input type="number" name="number" />
      <button onClick={}>Re-render. ()</button>
    </div>
  );
}

export default TryMemo;
