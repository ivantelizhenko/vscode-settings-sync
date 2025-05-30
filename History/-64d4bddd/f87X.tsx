import { useParams } from 'react-router';
import { useTabs } from '../store/TabsContext';

function Page() {
  const { tabs } = useTabs();
  const { userId } = useParams();
  const { title } = tabs.find(tab => tab.id === userId)!;

  return <div>{title}</div>;
}

export default Page;
