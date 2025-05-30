import AppNav from './AppNav';
import Logo from './Logo';
import styles from './Sidebar.module.css';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
    </div>
  );
}

export default SideBar;
