import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button({ type = 'green', icon = '', to = '', children, onClick }) {
  if (to !== '')
    return (
      <Link
        to={to}
        className={` ${
          type === 'green' ? styles.buttonGreen : styles.buttonRed
        } ${styles.button} ${icon ? styles.buttonWithIcon : ''}`}
      >
        <span className={styles.buttonIcon}>{icon}</span>
        {children}
      </Link>
    );

  return (
    <button
      onClick={onClick}
      className={` ${
        type === 'green' ? styles.buttonGreen : styles.buttonRed
      } ${styles.button} ${icon ? styles.buttonWithIcon : ''}`}
    >
      <span className={styles.buttonIcon}>{icon}</span>
      {children}
    </button>
  );
}

export default Button;
