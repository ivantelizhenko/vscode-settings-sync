import { useNotes } from '../Contexts/NotesContext.jsx';
import { useSelectedNote } from '../Contexts/SelectedNoteContext.jsx';
import { useLocalStorageState } from '../Hooks/useLocalStorageState.js';
import styles from './AppLayout.module.css';
import Empty from './Empty.jsx';
import Form from './Form.jsx';
import Header from './Header.jsx';
import List from './List.jsx';

function AppLayout() {
  const { notes } = useNotes();
  const { selectedNote } = useSelectedNote();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.leftSide}>
          {notes.length > 0 ? <List /> : <Empty message="Пусто" />}
        </div>
        <div className={styles.rightSide}>
          {selectedNote !== '' ? <Form /> : <Empty />}
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
