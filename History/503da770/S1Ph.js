function NextButton({ dispatch, answer, index }) {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        // if (index === 14) dispatch({ type: 'lastQuestion' });
        dispatch({ type: 'nextQuestion' });
      }}
    >
      Next
    </button>
  );
}

export default NextButton;
