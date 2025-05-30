import { useQuiz } from '../contexts/quizContext';

function Options() {
  const { question, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option 
          ${index === answer ? 'answer' : ''} 
          ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() =>}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
