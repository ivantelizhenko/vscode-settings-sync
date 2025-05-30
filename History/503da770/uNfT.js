function NextButton({ dispatch }) {
  return <button onClick={() => dispatch({ type: 'nextQuestion' })}></button>;
}

export default NextButton;
