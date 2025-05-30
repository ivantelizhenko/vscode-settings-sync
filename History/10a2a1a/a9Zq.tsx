import { useAppDispatch, useAppSelector } from '../store/hooks';
import Button from './Button';
import Input from './Input';
import Link from './Link';
import Stars from './Stars';

function Header() {
  const dispatch = useAppDispatch();
  const { requestData } = useAppSelector(store => store.list);

  function handleFetchIssues(e) {}

  return (
    <div className="grid grid-cols-[repeat(12,1fr)] grid-rows-2 gap-[1rem] ">
      <Input className="col-[1/-3]" />
      <Button className="col-[-1/-3]" onClick={handleFetchIssues}>
        Load issues
      </Button>
      <Link url="#">Link name</Link>
      <Stars />
    </div>
  );
}

export default Header;
