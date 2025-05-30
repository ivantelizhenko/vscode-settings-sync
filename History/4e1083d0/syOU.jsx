import { HiHome, HiShoppingCart } from 'react-icons/hi2';

import Button from './Button';
import styles from './Header.module.css';
import Logo from './Logo';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.searchContainer}>
        <Search />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          type="green"
          icon={<HiHome />}
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </Button>
        <Button
          type="green"
          icon={<HiShoppingCart />}
          onClick={() => {
            navigate('/cart');
          }}
        >
          Cart
        </Button>
      </div>
    </div>
  );
}

export default Header;
