import { useRef, useState } from 'react';

function MemoComponent({ number }) {
  return <p>I just return a number: {number}</p>;
}

function TryMemo() {
  const [number, setNumber] = useState(0);
  const [isRender, setIsRender] = useState(false);
  const renders = useRef(0);

  function handleClick() {
    setIsRender(!isRender);
    renders.current++;
  }

  return (
    <div>
      <MemoComponent number={number} />
      <input
        type="range"
        name="number"
        max="10"
        min="0"
        onChange={() => setNumber(prev => prev++)}
      />
      <button onClick={handleClick}>Re-render. (renders.current)</button>
    </div>
  );
}

export default TryMemo;
