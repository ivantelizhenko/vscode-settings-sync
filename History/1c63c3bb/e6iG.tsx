function Input(props) {
  const style =
    'input border-gray inline-block w-full rounded-[4px] border border-solid';

  return <input {...props} required className={style} />;
}

export default Input;
