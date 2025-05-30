function NextButton({ dispatch, answer }) {
  return (
    answer !== null && (
      <button
        className="btn btn-ui"
        onClick={() => {
          if (index === 15) dispatch({ type: 'lastQuestion' });
          dispatch({ type: 'nextQuestion' });
        }}
      >
        Next
      </button>
    )
  );
}

export default NextButton;
