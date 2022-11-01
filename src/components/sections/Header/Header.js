import styles from './Header.module.scss';

import clsx from 'clsx';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={clsx(styles.title, styles.below)}>YouTube to Spotify</h1>
      <h1 className={clsx(styles.title, styles.above)}>YouTube to Spotify</h1>
    </div>
  );
};

export default Header;
