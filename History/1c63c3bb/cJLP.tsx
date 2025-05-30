function Input({ placeholder, id }) {
  return (
    <input
      required
      id={id}
      type="text"
      placeholder={placeholder}
      className="input border-gray inline-block w-full rounded-[4px] border border-solid"
      {...register('title')}
    />
  );
}

export default Input;
