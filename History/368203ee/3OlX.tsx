import AppContainer from './Components/AppContainer';
import Form from './Components/Form/Form';
import List from './Components/List';
import { ScheduleProvider } from './store/ScheduleContext';

function App() {
  return (
    <ScheduleProvider>
      <AppContainer>
        <List />
        <Form />
      </AppContainer>
    </ScheduleProvider>
  );
}

export default App;
