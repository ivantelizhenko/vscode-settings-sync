import { createContext, useContext, useEffect, useReducer } from 'react';

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  seconds: null,
  chooseQuestions: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataRecieved':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
        chooseQuestions: action.payload,
      };

    case 'dataFailed':
      return { ...state, status: 'error' };

    case 'choose':
      return {
        ...state,
        status: 'ready',
        chooseQuestions: state.questions.slice(0, action.payload),
      };

    case 'setChoose':
      return { ...state, status: 'choose' };

    case 'start':
      return {
        ...state,
        status: 'active',
        seconds: state.questions.length * SECS_PER_QUESTION,
      };

    case 'newAnswer':
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case 'nextQuestion':
      return { ...state, index: state.index++, answer: null };

    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
      };

    case 'timer':
      return {
        ...state,
        seconds: state.seconds - 1,
        status: state.seconds === 0 ? 'finished' : state.status,
      };

    default:
      throw new Error('Action unknown');
  }
}

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

  function setStart() {
    dispatch({ type: 'start' });
  }
  function setChoose() {
    dispatch({ type: 'setChoose' });
  }

  function chooseAmountQuestions(numQuestions) {
    dispatch({ type: 'choose', payload: numQuestions });
  }

  function checkCorrectAnswer(index) {
    dispatch({ type: 'newAnswer', payload: index });
  }

  function timer() {
    dispatch({ type: 'timer' });
  }

  function nextQuestionBtn() {
    dispatch({ type: 'nextQuestion' });
  }

  function finishBtn() {
    dispatch({ type: 'finish' });
  }

  function restartBtn() {
    dispatch({ type: 'restart' });
  }

  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataRecieved', payload: data }))
      .catch(err => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        seconds,
        chooseQuestions,
        maxPossiblePoints,
        setStart,
        setChoose,
        chooseAmountQuestions,
        checkCorrectAnswer,
        timer,
        nextQuestionBtn,
        finishBtn,
        restartBtn,
      }}
    >
      рун
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error('QuizContext was used outside of the QuizContext');
  return context;
}

export { QuizProvider, useQuiz };
