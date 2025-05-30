import { HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi2';
import Button from './Button';
import styles from './Header.module.css';
import Logo from './Logo';
import Search from './Search';
import { useNotes } from '../Contexts/NotesContext';

function Header() {
  const { onAddNote, selectedNoteId, onToggleModal } = useNotes();

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Button
          type="green"
          icon={<HiOutlinePlus />}
          onClick={() => onAddNote()}
        >
          Створити нову
        </Button>
      </div>
      <div className={styles.buttonContainer}>
        {selectedNoteId && (
          <Button
            type="red"
            icon={<HiOutlineTrash />}
            onClick={() => {
              onToggleModal();
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
