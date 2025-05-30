function InputOrTextarea({
  placeholder,
  id,
  type,
  inputOrTextarea,
}: {
  placeholder: string;
  id: string;
  type?: string;
  inputOrTextarea: 'input' | 'textarea';
}) {
  const style =
    inputOrTextarea +
    ' border-gray inline-block w-full rounded-[4px] border border-solid';

  return <textarea required className={style} />;
  return <input required className={style} />;
}

export default InputOrTextarea;
