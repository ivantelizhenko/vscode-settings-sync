function NextButton({ dispatch, answer, index, numQuestion }) {
  if (answer === null) return null;

  if (index < numQuestion - 1)
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
  if (index === numQuestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          // if (index === 14) dispatch({ type: 'lastQuestion' });
          dispatch({ type: 'fin' });
        }}
      >
        Next
      </button>
    );
}

export default NextButton;
