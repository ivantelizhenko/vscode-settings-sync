function Progress({ index, numQuestions, sumPoints }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>

      <p>
        <strong>{points}</strong>/{sumPoints}
      </p>
    </header>
  );
}

export default Progress;
