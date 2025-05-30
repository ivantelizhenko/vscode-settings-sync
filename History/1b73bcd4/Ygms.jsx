import { useRef, useState } from 'react';

function TryMemo() {
  const [number, setNumber] = useState();
  const [isRender, setIsRender] = useState(false);
  const renders = useRef(0);

  function handleClick() {
    setIsRender(curr => !curr);
    renders.current++;
  }

  return (
    <div>
      <MemoComponent number={number} />
      <input type="number" name="number" />
      <button onClick={handleClick}>Re-render. (renders.current)</button>
    </div>
  );
}

export default TryMemo;
