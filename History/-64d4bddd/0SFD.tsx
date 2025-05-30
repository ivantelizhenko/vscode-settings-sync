import { useParams, useSearchParams } from 'react-router';
import { useTabs } from '../store/TabsContext';

function Page() {
  const { tabs } = useTabs();
  const { userId } = useParams();

  console.log(userId);
  return <div>Page</div>;
}

export default Page;
