import styles from './Preview.module.scss';

import Form from 'react-bootstrap/Form';
import Button from '../../features/Button/Button';
import Popup from '../../features/Popup/Popup';

import { useState } from 'react';


const Preview = () => {

  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => setShowPopup(true);

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
          <p className={styles.title}>Liu, Hollow Coves and Woak - Coastline</p>
          <Button type="spotify" action={handleClick}>
            <span className="fa fa-spotify"></span>
          </Button>
        </div>
      </div>

      <div className={styles.track_player}>
        <iframe
          src={`https://open.spotify.com/embed/track/10APf4gHZ7oLusw6oBteLQ?utm_source=generator`}
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </div>

      <div className={styles.confirmation_container}>
        <div className={styles.confirmation_button}>
          <Button type="confirmation" action={handleClick}>
            Save it!
          </Button>
        </div>
      </div>

      {showPopup &&
        <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
          Log in to Spotify to make it work.
        </Popup>
      }

    </div>
  );
};

export default Preview;
