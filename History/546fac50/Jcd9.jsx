import { useNotes } from '../Contexts/NotesContext.jsx';
import { useSelectedNoteId } from '../Contexts/SelectedNoteIdContext.jsx';
import styles from './AppLayout.module.css';
import Empty from './Empty.jsx';
import Form from './Form.jsx';
import Header from './Header.jsx';
import List from './List.jsx';
import Loader from './Loader.jsx';

function AppLayout() {
  const { notes } = useNotes();
  const { selectedNoteId } = useSelectedNoteId();

  return (
    <div className={styles.container}>
      <Header />
      {notes?.length ? (
        <div className={styles.main}>
          <div className={styles.leftSide}>
            {notes.length > 0 ? <List /> : <Empty message="Пусто" />}
          </div>
          <div className={styles.rightSide}>
            {selectedNoteId !== '' ? <Form /> : <Empty />}
          </div>
        </div>
      ) : (
        <div className={styles.loaderBox}>
          <Loader />
        </div>
      )}

      <ModalWindow />
    </div>
  );
}

export default AppLayout;
