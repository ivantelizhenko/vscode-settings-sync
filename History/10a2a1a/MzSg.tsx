import { useAppDispatch, useAppSelector } from '../store/hooks';
import Button from './Button';
import Input from './Input';
import Link from './Link';
import Stars from './Stars';

function Header() {
  const dispatch = useAppDispatch();
  const { requestData } = useAppSelector(store => store.list);

  function handleFetchIssues(e) {
    dispatch();
  }

  return (
    <div className="grid grid-cols-[repeat(12,1fr)] grid-rows-2 gap-[1rem] ">
      <form className="col-[1/-1]">
        <Input className="" />
        <Button className="col-[-1/-3]" onClick={handleFetchIssues}>
          Load issues
        </Button>
      </form>
      <Link url="#">Link name</Link>
      <Stars />
    </div>
  );
}

export default Header;
