import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>YouTube to Spotify</h1>
    </div>
  );
};

export default Header;
