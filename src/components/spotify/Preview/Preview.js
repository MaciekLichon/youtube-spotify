import styles from './Preview.module.scss';

import Form from 'react-bootstrap/Form';
import Button from '../../features/Button/Button';

const Preview = () => {

  return (
    <div className={styles.preview}>

      <div className={styles.profile_data}>
        <div className={styles.profile_img}></div>
        <div className={styles.text}>
          <p className={styles.name}>John Adams</p>
          <p className={styles.followers}>Followers: 20</p>
        </div>
      </div>

      <Form.Group className={styles.playlists}>
        <Form.Label className={styles.title}>Playlist: </Form.Label>
        <Form.Select className={styles.menu}>
          <option className={styles.item}>Pop</option>
          <option className={styles.item}>Favorites</option>
          <option className={styles.item}>Rock</option>
        </Form.Select>
      </Form.Group>

      <div className={styles.spotify_search}>
        <div className={styles.selector}>
          <p className={styles.title}>Sample - Rick Dawn</p>
          <Button type="spotify">
            <span className="fa fa-spotify"></span>
          </Button>
        </div>
      </div>

      <div className={styles.track_player}>
        <iframe
          src={`https://open.spotify.com/embed/track/6xtcFXSo8H9BZN637BMVKS?utm_source=generator`}
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </div>

      <div className={styles.confirmation_container}>
        <div className={styles.confirmation_button}>
          <Button type="confirmation">
            Save it!
          </Button>
        </div>
      </div>

    </div>
  );
};

export default Preview;
