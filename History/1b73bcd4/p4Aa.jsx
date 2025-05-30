import { memo, useRef, useState } from 'react';

const MemoComponent = memo(function MemoComponent({ number }) {
  return (
    <div>
      <p>I just show all numbers:</p>
      {number.map(n => (
        <span key={n}>{n}</span>
      ))}
    </div>
  );
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
          type="number"
          onChange={e =>
            setNumber(arr => {
              if (e.target.value) return [...arr, e.target.value];
              return [...arr];
            })
          }
        />
      </div>
      <button onClick={handleClick}>Re-render. ({renders.current})</button>
    </div>
  );
}

export default TryMemo;
