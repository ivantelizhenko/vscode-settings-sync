import { useAppSelector } from '../store/hooks';
import Form from '../features/Form';

import Link from './Link';

function Header() {
  const { repoData, isLoading } = useAppSelector(store => store.board);

  return (
    <div className="grid grid-cols-[repeat(12,1fr)] grid-rows-2 gap-[1rem] ">
      <Form className="col-[1/-1]" />
      {repoData.repoUrl && (
        <Link url={repoData.repoUrl} className="w-fit col-[1/-1]">
          {repoData.owner + ' > ' + repoData.repoName}
        </Link>
      )}
    </div>
  );
}

export default Header;
