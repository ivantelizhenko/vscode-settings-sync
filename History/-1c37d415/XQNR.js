function StartScreen({ numQuestions }) {
  return (
    <div>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button>Let's start</button>
    </div>
  );
}

export default StartScreen;
