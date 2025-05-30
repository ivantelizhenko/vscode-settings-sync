import { useNavigate, useParams } from 'react-router';
import { useTabs } from '../store/TabsContext';

function Page() {
  const navigate = useNavigate();
  const { tabs } = useTabs();
  const { userId } = useParams();
  const currentPage = tabs.find(tab => tab.id === userId);
  if (!currentPage) navigate('app');

  return <div>{currentPage?.title}</div>;
}

export default Page;
