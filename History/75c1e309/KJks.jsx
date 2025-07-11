import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import PageNav from '../components/PageNav';
import { useAuth } from '../contexts/FakeAuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');

  const navigate = useNavigate();

  const { login, isAuthenticated, user } = useAuth();

  function handleLogin(e) {
    e.preventDefault();
    login(email, password);
  }

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated === true) navigate('/app');
  }, [navigate, isAuthenticated]);

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={e => handleLogin(e)}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button onClick={e => handleLogin(e)}>Login</button>
        </div>
      </form>
    </main>
  );
}
