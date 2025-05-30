import { useParams } from 'react-router';
import { useTabs } from '../store/TabsContext';

function Page() {
  const { userId } = useParams();

  return <div>{userId}</div>;
}

export default Page;
