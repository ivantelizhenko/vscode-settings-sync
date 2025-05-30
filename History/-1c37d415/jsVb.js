function StartScreen({ numQuestions, setStart, setChoose }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={setStart}>
        Let's start
      </button>

      <button className="btn btn-ui btn-choose" onClick={setChoose}>
        Choose amount
      </button>
      <div className="inputBox">
        <input type="checkbox" name="easy" />
        <label form="easy">Easy</label>
        <input type="checkbox" name="medium" />
        <label for="medium">Medium</label>
        <input name="hard" type="checkbox" />
        <label for="hard">Hard</label>
      </div>
    </div>
  );
}

export default StartScreen;
