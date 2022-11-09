import styles from './Container.module.scss';

const Container = props => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {props.children}
      </div>
      <span className={styles.youtube_blob}></span>
      <span className={styles.spotify_blob}></span>
    </div>
  );
};

export default Container;
