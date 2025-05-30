import { createContext } from 'react';

const QuizContext = createContext();

function QuizProvider({ chidlren }) {
  return <QuizContext.Provider>{chidlren}</QuizContext.Provider>;
}
