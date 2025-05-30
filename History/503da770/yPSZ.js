function NextButton({ dispatch, answer, index }) {
  return (
    answer !== null && (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: 'nextQuestion' });
          if (index === 15) dispatch({ type: 'lastQuestion' });
        }}
      >
        Next
      </button>
    )
  );
}

export default NextButton;
