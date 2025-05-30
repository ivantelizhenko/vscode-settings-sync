import styles from './Button.module.css';

function Button({ type = 'green', icon = '', children }) {
  const combinedClasses = classNames('styles.button', `styles.button--${type}`);
  return <button className={combinedClasses}>{children}</button>;
}

export default Button;
