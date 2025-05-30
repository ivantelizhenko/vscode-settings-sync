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

export { QuizProvider, useQuiz } from '../contexts/quizContext.js';

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
                <Timer />
                <NextButton />
              </Footer>
            </>
          )}

          {status === 'finished' && (
            <>
              <FinishScreen />
              <RestartButton />
            </>
          )}
        </Main>
      </div>
    </QuizProvider>
  );
}
