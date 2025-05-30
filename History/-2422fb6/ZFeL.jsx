import { HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi2';
import Button from './Button';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button type="green" icon={<HiOutlinePlus />}>
          Створити нову
        </Button>
        <Button type="red" icon={<HiOutlineTrash />}>
          Видалити
        </Button>
      </div>
      <div className={styles.search}>Input Search</div>
    </div>
  );
}

export default Header;
