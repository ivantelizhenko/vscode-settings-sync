import { HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi2';
import Button from './Button';
import styles from './Header.module.css';
import Logo from './Logo';
import Search from './Search';
import { useNotes } from '../Contexts/NotesContext';

function Header() {
  const { onAddNote, selectedNoteId, onToggleModal } = useNotes();

  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.category}>category</div>
      <div>category</div>
      <div>category</div>
      <div>category</div>
      <div>category</div>
    </div>
  );
}

export default Header;
