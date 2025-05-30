import styles from './Empty.module.css';

function Empty({ message }) {
  return <p className={styles.empty}>{message}</p>;
}

export default Empty;
