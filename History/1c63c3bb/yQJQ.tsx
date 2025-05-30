function InputOrTextarea({
  ...props,
  inputOrTextarea,
}: {
  props: { placeholder: string; id: string; type: string };
  inputOrTextarea: 'input' | 'textarea';
}) {
  const style =
    inputOrTextarea +
    ' border-gray inline-block w-full rounded-[4px] border border-solid';

  if (!('type' in props) && props.type)
    return <textarea required {...props} className={style} />;
  return <input required {...props} className={style} />;
}

export default InputOrTextarea;
