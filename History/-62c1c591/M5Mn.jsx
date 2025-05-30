import styles from './Button.module.css';

function Button({ type = 'green', icon = '', children }) {
  return (
    <button className={`styles.button, styles.button--${type}`}>
      {children}
    </button>
  );
}

export default Button;
