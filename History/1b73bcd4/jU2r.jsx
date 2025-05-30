import { useState } from "react";

function TryMemo() {
  const [number, setNumber] = useState()

  return (
    <div>
      <MemoComponent number={}/>
      <input type="number" name="number" />
    </div>
  );
}

export default TryMemo;
