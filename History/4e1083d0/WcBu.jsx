import { HiShoppingCart } from 'react-icons/hi2';

import Button from './Button';
import styles from './Header.module.css';
import Logo from './Logo';
import Search from './Search';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>

      <div className={styles.searchContainer}>
        <Search />
      </div>
      <div className={styles.buttonContainer}>
        <Button type="green" icon={<HiShoppingCart />} onClick={() => {}}>
          Cart
        </Button>
      </div>
    </div>
  );
}

export default Header;
