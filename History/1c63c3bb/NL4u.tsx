function InputOrTextarea({
  placeholder,
  id,
  type,
}: {
  placeholder: string;
  id: string;
  type: string;
}) {
  const style =
    'input border-gray inline-block w-full rounded-[4px] border border-solid';

  return (
    <input
      required
      placeholder={placeholder}
      id={id}
      type={type}
      className={style}
    />
  );
}

export default Input;
