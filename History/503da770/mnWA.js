import { useQuiz } from '../contexts/quizContext';

function NextButton({ dispatch }) {
  const { chooseQuestions, answer, index } = useQuiz();

  const numQuestions = chooseQuestions.length;
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => {}}>
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: 'finish' });
        }}
      >
        Finish
      </button>
    );
}

export default NextButton;
