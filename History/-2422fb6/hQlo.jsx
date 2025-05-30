import { HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi2';
import Button from './Button';
import styles from './Header.module.css';
import Logo from './Logo';

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
      <Search />
    </div>
  );
}

export default Header;
