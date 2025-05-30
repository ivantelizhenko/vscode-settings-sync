import { ChangeEvent, useState } from 'react';

const style = 'input text-[1.6rem] p-[1.6rem] w-full ';

function Input({ className }: { className?: string }) {
  const [url, setUrl] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value.split('github.com')[1].split('/'));
    setUrl(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Enter repo URL"
      className={style + ' ' + className}
      value={url}
      onChange={handleChange}
    />
  );
}

export default Input;
