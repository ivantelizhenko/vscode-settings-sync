import { useState } from 'react';

function Choose({ questions, chooseQuestions, dispatch }) {
  const [numQuestions, setNumQuestions] = useState(15);

  return (
    <div>
      <div style={style}>
        <p>0</p>
        <input
          type="range"
          max={questions.length}
          onChange={e => setNumQuestions(e.target.value)}
        />
        <p>{questions.length}</p>
      </div>
      <p>{numQuestions}</p>
      <button>Accept</button>
    </div>
  );
}

export default Choose;
