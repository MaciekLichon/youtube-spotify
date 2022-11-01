import styles from './Playlists.module.scss';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPlaylists } from '../../../redux/spotifyPlaylistsRedux';

const Playlists = ({ userPlaylists }) => {

  return (
    <form className={styles.playlists}>
      <p className={styles.title}>Select a playlist</p>
      <select className={styles.menu}>
        {userPlaylists.map(item => (
          <option key={item.id} className={styles.item} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Playlists;
