import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import RestartButton from './RestartButton';
import Footer from './Footer';
import Timer from './Timer';
import Choose from './Choose';

import { QuizProvider, useQuiz } from '../contexts/quizContext';

export default function App() {
  const { status } = useQuiz();

  return (
    <QuizProvider>
      <div className="app">
        <Header />
        <Main>
          {status === 'loading' && <Loader />}
          {status === 'error' && <Error />}
          {status === 'choose' && <Choose />}
          {status === 'ready' && <StartScreen />}
          {status === 'active' && (
            <>
              <Progress />
              <Question />
              <Footer>
                <Timer dispatch={dispatch} seconds={seconds} />
                <NextButton
                  dispatch={dispatch}
                  answer={answer}
                  index={index}
                  numQuestions={chooseQuestions.length}
                />
              </Footer>
            </>
          )}

          {status === 'finished' && (
            <>
              <FinishScreen
                points={points}
                maxPossiblePoints={maxPossiblePoints}
                highscore={highscore}
              />
              <RestartButton dispatch={dispatch} />
            </>
          )}
        </Main>
      </div>
    </QuizProvider>
  );
}
