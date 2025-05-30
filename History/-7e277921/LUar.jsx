import styles from './Categories.module.css';

function Categories() {
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

export default Categories;
