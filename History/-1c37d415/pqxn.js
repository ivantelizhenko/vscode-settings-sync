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
      <div></div>
    </div>
  );
}

export default StartScreen;
