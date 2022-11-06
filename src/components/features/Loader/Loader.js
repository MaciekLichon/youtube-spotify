import styles from './Loader.module.scss';

import clsx from 'clsx';

const Loader = ({ requesting }) => {
  return (
    <div className={styles.loader}>
      <div className={styles.hand}>
        <div className={clsx(styles.finger, styles.one)}>
          <div className={styles.stripes}>
            <span className={styles.stripe}></span>
            <span className={styles.stripe}></span>
          </div>
          <div className={styles.nail}></div>
        </div>
        <div className={clsx(styles.finger, styles.two)}>
          <div className={styles.stripes}>
            <span className={styles.stripe}></span>
            <span className={styles.stripe}></span>
          </div>
          <div className={styles.nail}></div>
        </div>
        <div className={clsx(styles.finger, styles.three)}>
          <div className={styles.stripes}>
            <span className={styles.stripe}></span>
            <span className={styles.stripe}></span>
          </div>
          <div className={styles.nail}></div>
        </div>
        <div className={clsx(styles.finger, styles.four)}>
          <div className={styles.stripes}>
            <span className={styles.stripe}></span>
            <span className={styles.stripe}></span>
          </div>
          <div className={styles.nail}></div>
        </div>
        <div className={styles.thumb}>
          <div className={styles.container}>
            <span className={styles.piece_one}></span>
            <span className={styles.piece_two}></span>
            <span className={styles.piece_three}></span>
          </div>
        </div>
      </div>

      <p className={clsx(styles.message, !requesting && styles.visible)}>Enter phrase or link below</p>
      <p className={clsx(styles.message, requesting && styles.visible)}>Downloading...</p>

    </div>
  );
};

export default Loader;
