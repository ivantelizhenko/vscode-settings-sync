import styles from './Button.module.css';

function Button({ type = 'green', icon = '', children }) {
  return <button>{children}</button>;
}

export default Button;
