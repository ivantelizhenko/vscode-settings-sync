import { useState } from 'react';
import { useNotes } from '../Contexts/NotesContext.jsx';
import { useSelectedNoteId } from '../Contexts/SelectedNoteIdContext.jsx';
import styles from './AppLayout.module.css';
import Empty from './Empty.jsx';
import Form from './Form.jsx';
import Header from './Header.jsx';
import List from './List.jsx';
import Loader from './Loader.jsx';
import ModalWindow from './ModalWindow.jsx';
import { useConfirmDelete } from '../Contexts/ConfirmDeleteContext.jsx';

function AppLayout() {
  const { notes, selectedNoteId, deleteNote } = useNotes();

  const { confirmDelete, setConfirmDelete } = useConfirmDelete();

  // const isLoading = true;

  // if (isLoading)
  //   return (
  //     <div className={styles.loaderBox}>
  //       <Loader />
  //     </div>
  //   );

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
            deleteNote(selectedNoteId);
          }}
          handlerRejected={() => {
            setConfirmDelete(false);
          }}
        />
      )}
    </div>
  );
}

export default AppLayout;
