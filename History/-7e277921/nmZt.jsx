import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.category}>category</div>
      <div className={styles.category}>category</div>
      <div className={styles.category}>category</div>
      <div className={styles.category}>category</div>
      <div className={styles.category}>category</div>
    </div>
  );
}

export default Header;
