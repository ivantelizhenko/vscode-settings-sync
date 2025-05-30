import { createContext, useContext } from 'react';

const QuizContext = createContext();

function QuizProvider({ chidlren }) {
  return <QuizContext.Provider>{chidlren}</QuizContext.Provider>;
}

function useQuiz() {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error('QuizContext was used outside of the QuizContext');
  return context;
}
