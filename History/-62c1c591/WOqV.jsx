import styles from './Button.module.css';

function Button({ type = 'green', icon = '', children }) {
  const buttonColor = `styles.button--${type}`;
  console.log(styles.button);

  return <button className={(buttonColor, styles.button)}>{children}</button>;
}

export default Button;
