function Options({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map(option => (
        <button className="btn btn-option" key={option}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
