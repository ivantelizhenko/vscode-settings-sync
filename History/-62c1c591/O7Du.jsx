import styles from './Button.module.css';

function Button({ type = 'green', icon = '', children }) {
  const buttonColor = `styles.button--${type}`;
  console.log(styles.button);

  return (
    <button
      className={`${styles.button} ${
        type === 'green' ? styles.button__green : styles.button__red
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
