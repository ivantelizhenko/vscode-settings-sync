function Choose({ questions, chooseQuestions, dispatch }) {
  return (
    <div>
      <input type="range" max={questions.length} onChange={e => dispatch} />
      <p>{}</p>
      <button>Accept</button>
    </div>
  );
}

export default Choose;
