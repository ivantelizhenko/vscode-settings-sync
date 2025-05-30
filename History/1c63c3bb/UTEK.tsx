function InputOrTextarea({
  placeholder,
  id,
  type,
  inputOrTextarea,
}: {
  placeholder: string;
  id: string;
  type: string;
  inputOrTextarea: 'input' | 'textarea';
}) {
  const style =
    inputOrTextarea +
    ' border-gray inline-block w-full rounded-[4px] border border-solid';

  if (type)
    return (
      <input
        required
        placeholder={placeholder}
        id={id}
        type={type}
        className={style}
      />
    );

  return (
    <textarea required placeholder={placeholder} id={id} className={style} />
  );
}

export default InputOrTextarea;
