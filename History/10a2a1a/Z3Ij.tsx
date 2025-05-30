import { useAppDispatch, useAppSelector } from '../store/hooks';
import Button from './Button';
import Form from './Form';
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
      <Form className="col-[1/-1]" />
      <Link url="#">Link name</Link>
      <Stars />
    </div>
  );
}

export default Header;
