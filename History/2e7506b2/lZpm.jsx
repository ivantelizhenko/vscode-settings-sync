import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const arr = [1, 2, 3, 4, 5];

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={() => {
            navigate('list');
          }}
        >
          List
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate('dashboard');
          }}
        >
          Dashboard
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate('footer');
          }}
        >
          Footer
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate('box');
          }}
        >
          Box
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate('login');
          }}
        >
          Login
        </button>
      </div>

      {pathname.includes('/list') && (
        <div className={styles.container}>
          {arr.map(el => (
            <Link key={el} className={styles.link} to={`list/${el}`}>
              {el}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
