import { useNavigate, useParams } from 'react-router';
import { useTabs } from '../store/TabsContext';

function Page() {
  const navigate = useNavigate();
  const { tabs } = useTabs();
  const { userId } = useParams();
  const { title } = tabs.find(tab => tab.id === userId)!;
  if (!title) navigate('app');

  return <div>{title}</div>;
}

export default Page;
