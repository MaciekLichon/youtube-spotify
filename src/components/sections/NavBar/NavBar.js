import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.options}>
        <a href="" className={styles.nav_button}>Home</a>
        <a href="" className={styles.nav_button}>Details</a>
        <a href="" className={styles.nav_button}>Guide</a>
      </div>
    </nav>
  );
};

export default NavBar;
