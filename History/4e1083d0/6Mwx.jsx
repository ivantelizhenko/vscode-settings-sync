import { HiShoppingCart, HiOutlineTrash } from 'react-icons/hi2';

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
        <Logo />
      </div>
      <div className={styles.buttonContainer}>
        <Button type="green" icon={<HiShoppingCart />} onClick={() => {}}>
          Cart
        </Button>
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
