import { HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi2';
import Button from './Button';
import styles from './Header.module.css';
import Logo from './Logo';
import Search from './Search';
import { useNotes } from '../Contexts/NotesContextWithReducer';
import { useSelectedNoteId } from '../Contexts/SelectedNoteIdContext';
import { useConfirmDelete } from '../Contexts/ConfirmDeleteContext';

function Header() {
  const { addNote, deleteNote } = useNotes();
  const { selectedNoteId } = useSelectedNoteId();
  const { setConfirmDelete } = useConfirmDelete();

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.buttonContainer}>
        <Button type="green" icon={<HiOutlinePlus />} onClick={() => addNote()}>
          Створити нову
        </Button>
        {selectedNoteId && (
          <Button
            type="red"
            icon={<HiOutlineTrash />}
            onClick={() => {
              setConfirmDelete(true);
            }}
          >
            Видалити
          </Button>
        )}
      </div>
      <div className={styles.searchContainer}>
        <Search />
      </div>
    </div>
  );
}

export default Header;
