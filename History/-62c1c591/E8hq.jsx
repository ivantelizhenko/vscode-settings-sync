import styles from './Button.module.css';

function Button({ type = 'green', icon = '', children }) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
