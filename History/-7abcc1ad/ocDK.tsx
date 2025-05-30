import { useAppSelector } from './store/hooks';

function App() {
  const x = useAppSelector(store => store.listReducer);

  return <div>Start</div>;
}

export default App;
