import styles from './Loader.module.scss';

import clsx from 'clsx';

const Loader = ({ requesting }) => {
  return (
    <div className={styles.loader}>

      <span className={styles.ball}></span>
      <span className={styles.ball}></span>
      <span className={styles.ball}></span>
      <span className={styles.ball}></span>
      <span className={styles.ball}></span>

      <p className={clsx(styles.message, !requesting && styles.visible)}>Enter keywords or link below</p>
      <p className={clsx(styles.message, requesting && styles.visible)}>Downloading...</p>

    </div>
  );
};

export default Loader;
