import styles from './Button.module.css';

function Button({ type = 'green', icon = '', children }) {
  return (
    <button
      className={` ${
        type === 'green' ? styles.button__green : styles.button__red
      } ${styles.button}`}
    >
      <span>{icon}</span>
      {children}
    </button>
  );
}

export default Button;
