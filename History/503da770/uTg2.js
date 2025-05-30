function NextButton({ dispatch, answer, index }) {
  return (
    answer !== null && (
      <button
        className="btn btn-ui"
        onClick={() => {
          if (index === 15) dispatch({ type: 'lastQuestion' });
          if (index !== 15) dispatch({ type: 'nextQuestion' });
        }}
      >
        Next
      </button>
    )
  );
}

export default NextButton;
