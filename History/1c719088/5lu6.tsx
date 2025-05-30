import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getIssues } from '../store/ListSlice';
import Button from './Button';
import Input from './Input';

const style = 'flex gap-[2.4rem] ';

function Form({ className }: { className: string }) {
  const dispatch = useAppDispatch();
  const { requestData } = useAppSelector(store => store.list);

  function handleFetchIssues(e: React.MouseEvent) {
    e.preventDefault();
    console.log(getIssues);
    dispatch(getIssues(requestData.owner, requestData.repoName));
  }

  return (
    <form className={style + ' ' + className} onSubmit={handleFetchIssues}>
      <Input className="col-[1/-3]" />
      <Button className="col-[-1/-3] min-w-fit px-[1rem]">Load issues</Button>
    </form>
  );
}

export default Form;
