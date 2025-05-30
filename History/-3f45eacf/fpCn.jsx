import { createContext, useContext, useEffect, useReducer } from 'react';

const QuizContext = createContext();

function QuizProvider({ chidlren }) {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      highscore,
      seconds,
      chooseQuestions,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const maxPossiblePoints = chooseQuestions?.reduce(
    (acc, question) => acc + question.points,
    0
  );

  function handleSetStart() {
    dispatch({ type: 'start' });
  }
  function handleSetChoose() {
    dispatch({ type: 'setChoose' });
  }

  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataRecieved', payload: data }))
      .catch(err => dispatch({ type: 'dataFailed' }));
  }, []);

  return <QuizContext.Provider>{chidlren}</QuizContext.Provider>;
}

function useQuiz() {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error('QuizContext was used outside of the QuizContext');
  return context;
}

export { QuizProvider, useQuiz };
