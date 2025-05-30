import { HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi2';
import Button from './Button';
import styles from './Header.module.css';
import Logo from './Logo';
import Search from './Search';
import { useNotes } from '../Contexts/NotesContext';

function Header() {
  const { notes, addNote } = useNotes();
  console.log(notes);
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.buttonContainer}>
        <Button type="green" icon={<HiOutlinePlus />} onClick={addNote}>
          Створити нову
        </Button>
        <Button type="red" icon={<HiOutlineTrash />}>
          Видалити
        </Button>
      </div>
      <div className={styles.searchContainer}>
        <Search />
      </div>
    </div>
  );
}

export default Header;
