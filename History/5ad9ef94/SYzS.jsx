import styles from './ListItem.module.css';

function ListItem({ note }) {
  return (
    <div
      className={`${styles.container} ${
        false === id ? styles.containerActive : ''
      }`}
    >
      <h2 className={styles.title}>title</h2>

      <p className={styles.description}>description</p>
    </div>
  );
}

export default ListItem;
