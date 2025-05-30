import { Outlet } from 'react-router-dom';
import { useNotes } from '../Contexts/NotesContext.jsx';

import styles from './AppLayout.module.css';
import Categories from './Categories.jsx';
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
    isOpenModal,
    onDeleteNoteResolve,
    onDeleteNoteReject,
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
      <Categories />
      <div className={styles.main}>
        <div className={styles.leftSide}>
          <List />
        </div>
        <div className={styles.rightSide}>
          {selectedNoteId !== '' ? <Form /> : <Empty />}
        </div>
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
