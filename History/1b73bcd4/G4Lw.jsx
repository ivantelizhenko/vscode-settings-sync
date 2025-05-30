import { useState } from "react";

function TryMemo() {
  const [number, setNumber] = useState()
  const renders = useRef()


  return (
    <div>
      <MemoComponent number={}/>
      <input type="number" name="number" />
      <button>Re-render. ()</button>
    </div>
  );
}

export default TryMemo;
