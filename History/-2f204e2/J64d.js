import { useState } from 'react';

function Choose({ questions, chooseQuestions, dispatch }) {
  const [numQuestions, setNumQuestions] = useState(15);

  return (
    <div>
      <input
        type="range"
        max={questions.length}
        onChange={e => setNumQuestions(e.target.value)}
      />
      <p>{numQuestions}</p>
      <button>Accept</button>
    </div>
  );
}

export default Choose;
