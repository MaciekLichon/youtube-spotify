import styles from './Playlists.module.scss';

import { useEffect } from 'react';

import Form from 'react-bootstrap/Form';


const Playlists = ({ userPlaylists, setCurrentPlaylist }) => {

  useEffect(() => {
    setCurrentPlaylist(userPlaylists[0].id);
    // console.log(userPlaylists[0].id);
  }, []);

  const handleChange = e => {
    setCurrentPlaylist(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <Form.Group className={styles.playlists}>
      <Form.Label className={styles.title}>Playlist: </Form.Label>
      <Form.Select className={styles.menu} onChange={handleChange}>
        {userPlaylists.map(item => (
          <option key={item.id} className={styles.item} value={item.id}>
            {item.name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default Playlists;
