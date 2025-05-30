import styles from './Button.module.css';

function Button({ type = 'green', icon = '', children }) {
  const buttonColor = styles.button + type;
  console.log(buttonColor);
  return (
    <button className={`${styles.button} ${styles.button__type}`}>
      {children}
    </button>
  );
}

export default Button;
