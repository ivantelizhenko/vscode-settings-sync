function Choose({ questions }) {
  return (
    <div>
      <input type="range" max={questions.length} />
      <p>{}</p>
      <button>Accept</button>
    </div>
  );
}

export default Choose;
