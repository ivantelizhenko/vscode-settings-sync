import { NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';

import styles from './PageNav.module.css';

function PageNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
