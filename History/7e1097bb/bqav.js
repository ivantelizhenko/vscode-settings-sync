function Options({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option 
          ${index === answer ? 'answer' : ''} 
          ${answer && {index === question.correctOption ? 'correct' : 'wrong'}}`}
          key={option}
          disabled={answer ? 'disabled' : ''}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
