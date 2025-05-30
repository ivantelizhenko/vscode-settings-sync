import { useAppSelector } from './store/hooks';

function App() {
  const x = useAppSelector(store => store.list);

  return <div>Start</div>;
}

export default App;
