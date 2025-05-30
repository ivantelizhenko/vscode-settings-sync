import { useEffect } from 'react';
import { useQuiz } from '../contexts/quizContext';

function Timer({ dispatch }) {
  const { seconds, timer } = useQuiz();

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  useEffect(
    function () {
      const id = setInterval(timer, 1000);

      return () => clearInterval(id);
    },
    [timer]
  );

  return (
    <div className="timer">
      {mins < 10 && '0'}
      {mins}:{secs < 10 && '0'}
      {secs}
    </div>
  );
}

export default Timer;
