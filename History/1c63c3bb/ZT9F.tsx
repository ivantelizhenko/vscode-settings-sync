function Input({ placeholder, id, type }) {
  const style =
    'input border-gray inline-block w-full rounded-[4px] border border-solid';

  return <input required ...{id } className={style} />;
}

export default Input;
