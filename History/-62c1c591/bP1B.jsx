import styles from './Button.module.css';

function Button({ type = 'green', icon = '', children }) {
  const combinedClasses = classNames(styles.button, styles.button--);
  return (
    <button className={(styles.button, `styles.button--${type}`)}>
      {children}
    </button>
  );
}

export default Button;
