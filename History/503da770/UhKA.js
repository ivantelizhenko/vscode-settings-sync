function NextButton({ dispatch }) {
  return (
    <button className="btn " onClick={() => dispatch({ type: 'nextQuestion' })}>
      Next
    </button>
  );
}

export default NextButton;
