function NextButton({ dispatch, answer, index }) {
  return (
    answer !== null && (
      <button
        className="btn btn-ui"
        onClick={() => {
          if (index === 14) dispatch({ type: 'lastQuestion' });
          dispatch({ type: 'nextQuestion' });
        }}
      >
        Next
      </button>
    )
  );
}

export default NextButton;
