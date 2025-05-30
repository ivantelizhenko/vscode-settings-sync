import { useQuiz } from '../contexts/QuizContext';

function RestartButton() {
  const { restartBtn } = useQuiz();

  return (
    <button className="btn btn-ui" onClick={restartBtn}>
      Restart quiz
    </button>
  );
}

export default RestartButton;
