function TextInput({ title }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={title} className="text-xl">
        {title}
      </label>
      <input
        id={title}
        type="text"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}

export default TextInput;
