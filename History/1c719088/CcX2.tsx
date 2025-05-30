import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getIssues } from '../store/ListSlice';
import Button from './Button';
import Input from './Input';

const style = 'flex gap-[2.4rem] ';

function Form({ className }: { className: string }) {
  const [requestObj, setRequestObj] = useState<{
    owner: string;
    repoName: string;
  }>({ owner: '', repoName: '' });
  const dispatch = useAppDispatch();

  function handleFetchIssues(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(getIssues(requestObj.owner, requestObj.repoName));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const data = e.target.value.replace('https://github.com/', '').split('/');

    if (data[0]) setRequestObj({ owner: data[0], repoName: data[1] });
  }

  return (
    <form className={style + ' ' + className} onSubmit={handleFetchIssues}>
      <Input className="col-[1/-3]" onChange={handleChange} />
      <Button className="col-[-1/-3] " type="submit">
        Load issues
      </Button>
    </form>
  );
}

export default Form;
