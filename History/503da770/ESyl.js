import { useQuiz } from '../contexts/QuizContext';

function NextButton({ dispatch }) {
  const { chooseQuestions, answer, index, nextQuestionBtn, finishBtn } =
    useQuiz();

  const numQuestions = chooseQuestions.length;
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={nextQuestionBtn}>
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={finishBtn}>
        Finish
      </button>
    );
}

export default NextButton;
