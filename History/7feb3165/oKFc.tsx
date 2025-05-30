import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';

function App() {
  const x = useTimers;

  return (
    <TimersProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersProvider>
  );
}

export default App;
