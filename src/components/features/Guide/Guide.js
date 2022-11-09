import styles from './Guide.module.scss';

const Guide = () => {
  return (
    <div className={styles.guide}>
      <ol className={styles.list}>
        <li>Use keywords or Youtube link to find music</li>
        <li>Log in to Spotify</li>
        <li>Choose your playlist</li>
        <li>Find selected music on Spotify</li>
        <li>Save it to the playlist</li>
      </ol>

      <p className={styles.preview_info}>If you don't want to log in to Spotify, you can have a look at the grayed out preview to get an idea of how the app works.</p>
    </div>
  );
};

export default Guide;
