import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const arr = [1, 2, 3, 4, 5];

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={() => {
            navigate('/list');
          }}
        >
          List
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          Dashboard
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate('/footer');
          }}
        >
          Footer
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate('/box');
          }}
        >
          Box
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </button>
      </div>

      <div className={styles.container}>
        <Link className={styles.link} to="/list/:1">
          1
        </Link>
        <Link className={styles.link} to="/list/:2">
          2
        </Link>
        <Link className={styles.link} to="/list/:3">
          3
        </Link>
        <Link className={styles.link} to="/list/:4">
          4
        </Link>
        <Link className={styles.link} to="/list/:5">
          5
        </Link>
      </div>
    </>
  );
}

export default Header;
