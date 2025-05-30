function Input({ placeholder }) {
  return (
    <input
      id="title"
      required
      type="text"
      placeholder={placeholder}
      className="input border-gray inline-block w-full rounded-[4px] border border-solid"
      {...register('title')}
    />
  );
}

export default Input;
