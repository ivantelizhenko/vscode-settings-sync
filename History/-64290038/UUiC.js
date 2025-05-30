import { useQuiz } from '../contexts/quizContext';

function Progress() {
  const { index, chooseQuestions, points, maxPossiblePoints, answer } =
    useQuiz();

  const numQuestions = chooseQuestions.length;

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>

      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
