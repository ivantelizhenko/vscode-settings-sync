import { memo, useRef, useState } from 'react';

const MemoComponent = memo(function MemoComponent({ number }) {
  return <div></div>;
});

function TryMemo() {
  const [number, setNumber] = useState([]);
  const [isRender, setIsRender] = useState(false);
  const renders = useRef(0);

  function handleClick() {
    setIsRender(!isRender);
    renders.current++;
  }

  return (
    <div>
      <MemoComponent number={number} />
      <div>
        <input
          type="range"
          name="number"
          max="9"
          min="0"
          onChange={e => setNumber(arr => arr.push(e.target.value))}
        />
      </div>
      <button onClick={handleClick}>Re-render. ({renders.current})</button>
    </div>
  );
}

export default TryMemo;
