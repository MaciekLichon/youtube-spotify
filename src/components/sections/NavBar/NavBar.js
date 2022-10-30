import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.options}>
        <p>Home</p>
        <p>Details</p>
        <p>More</p>
      </div>
    </nav>
  );
};

export default NavBar;
