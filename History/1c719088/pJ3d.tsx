import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getIssues } from '../store/ListSlice';
import Button from './Button';
import Input from './Input';

const style = 'flex gap-[2.4rem] ';

function Form({ className }: { className: string }) {
  const dispatch = useAppDispatch();
  const { requestData } = useAppSelector(store => store.list);

  function handleFetchIssues(e) {
    console.log(getIssues);
    // dispatch(
    //   getIssues({ owner: requestData.owner, repoName: requestData.repoName })
    // );
  }

  return (
    <form className={style + ' ' + className}>
      <Input className="col-[1/-3]" />
      <Button
        className="col-[-1/-3] min-w-fit px-[1rem]"
        onClick={handleFetchIssues}
      >
        Load issues
      </Button>
    </form>
  );
}

export default Form;
