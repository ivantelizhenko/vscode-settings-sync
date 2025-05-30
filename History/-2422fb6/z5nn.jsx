import { HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi2';
import Button from './Button';
import styles from './Header.module.css';
import Logo from './Logo';
import Search from './Search';

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.buttonContainer}>
        <Button type="green" icon={<HiOutlinePlus />}>
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
