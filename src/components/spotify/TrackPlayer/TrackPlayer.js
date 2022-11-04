import styles from './TrackPlayer.module.scss';

const TrackPlayer = ({ tracksData }) => {
  return (
    <div className={styles.track_player}>
      <iframe
        src={`https://open.spotify.com/embed/track/${tracksData.id}?utm_source=generator`}
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </div>
  );
};

export default TrackPlayer;
