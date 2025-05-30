import { useState } from 'react';

function Choose({ questions, chooseQuestions, dispatch }) {
  const [numQuestions, setNumQuestions] = useState(15);

  const styleInput = {
    display: 'flex',
    gap: '16px',
    fontSize: '24px',
    position: 'relative',
  };

  const styleScore = { position: 'absolute', top: '20px', left: '50%' };

  return (
    <div>
      <div style={styleInput}>
        <p>0</p>
        <input
          type="range"
          max={questions.length}
          onChange={e => setNumQuestions(e.target.value)}
        />
        <p>{questions.length}</p>
      </div>
      <p style={styleScore}>{numQuestions}</p>
      <button>Accept</button>
    </div>
  );
}

export default Choose;
