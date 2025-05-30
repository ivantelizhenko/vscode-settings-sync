import styles from './Button.module.css';

function Button({ type = 'green', icon = '', children }) {
  const buttonColor = `styles.button--${type}`;
  console.log(buttonColor);

  return <button className={buttonColor}>{children}</button>;
}

export default Button;
