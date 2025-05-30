import Question from './Question.js';

function Question({ question }) {
  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Question />
    </div>
  );
}

export default Question;
