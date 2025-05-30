import { useNotes } from '../Contexts/NotesContext.jsx';

import styles from './AppLayout.module.css';
import Empty from './Empty.jsx';
import Form from './Form.jsx';
import Header from './Header.jsx';
import List from './List.jsx';
import Loader from './Loader.jsx';
import ModalWindow from './ModalWindow.jsx';

function AppLayout() {
  const {
    notes,
    selectedNoteId,
    isLoading,
    confirmDelete,
    deleteNoteResolve,
    deleteNoteReject,
  } = useNotes();

  if (isLoading)
    return (
      <div className={styles.loaderBox}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.leftSide}>
          {notes.length > 0 ? <List /> : <Empty message="Пусто" />}
        </div>
        <div className={styles.rightSide}>
          {selectedNoteId !== '' ? <Form /> : <Empty />}
        </div>
      </div>
      {confirmDelete && (
        <ModalWindow
          title="Are you sure?"
          handlerResolved={() => {
            deleteNoteResolve();
          }}
          handlerRejected={() => {
            deleteNoteReject();
          }}
        />
      )}
    </div>
  );
}

export default AppLayout;
