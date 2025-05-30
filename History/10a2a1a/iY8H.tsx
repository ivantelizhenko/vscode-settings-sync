import { useAppSelector } from '../store/hooks';
import Form from './Form';

import Link from './Link';
import Stars from './Stars';

function Header() {
  const { repoData } = useAppSelector(store => store.list);

  return (
    <div className="grid grid-cols-[repeat(12,1fr)] grid-rows-2 gap-[1rem] ">
      <Form className="col-[1/-1]" />
      <Link url={repoData.repoUrl}>Link name</Link>
      <Stars />
    </div>
  );
}

export default Header;
