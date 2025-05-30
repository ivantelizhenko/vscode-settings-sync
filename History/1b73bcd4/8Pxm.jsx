import { useRef, useState } from 'react';

function MemoComponent({ number }) {
  return <p>I just return a number: {number}</p>;
}

function TryMemo() {
  const [number, setNumber] = useState(0);
  const [setIsRender] = useState(false);
  const renders = useRef(0);

  function handleClick() {
    setIsRender(curr => !curr);
    renders.current++;
  }

  return (
    <div>
      <MemoComponent number={number} />
      <input
        type="number"
        name="number"
        onChange={() => setNumber(prev => prev++)}
      />
      <button onClick={handleClick}>Re-render. (renders.current)</button>
    </div>
  );
}

export default TryMemo;
