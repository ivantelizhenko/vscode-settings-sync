function Input({ ...others }) {
  return (
    <input
      {...others}
      className="input border-gray-400 border border-solid text-[1.6rem] focus:border-black"
    />
  );
}

export default Input;
