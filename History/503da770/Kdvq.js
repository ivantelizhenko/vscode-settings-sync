function NextButton({ dispatch, answer, index, numQuestion }) {
  if (answer === null) return null;

  if (index < numQuestion)
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
