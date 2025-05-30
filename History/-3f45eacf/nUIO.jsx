import { createContext, useContext } from 'react';

const QuizContext = createContext();

function QuizProvider({ chidlren }) {
  return <QuizContext.Provider>{chidlren}</QuizContext.Provider>;
}

useQuiz(){
  const context = useContext(QuizContext)
}