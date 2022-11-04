import styles from './TransferConfirmation.module.scss';

import Button from '../../features/Button/Button';

import { getSpotifyPlaylistById } from '../../../redux/spotifyPlaylistsRedux';
import { useSelector } from 'react-redux';

const TransferConfirmation = ({ currentPlaylist, tracksData, token }) => {

  const playlistData = useSelector(state => getSpotifyPlaylistById(state, currentPlaylist));

  const saveTrack = () => {

    console.log('currentPlaylist', currentPlaylist);
    console.log('tracksData = id', tracksData);
    console.log('uri', tracksData.uri);
    console.log('playlistData', playlistData);

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    fetch(`https://api.spotify.com/v1/playlists/${playlistData.id}/tracks?uris=${tracksData.uri}`, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  };

  return (
    <div className={styles.confirmation_container}>
      <div className={styles.confirmation_button}>
        <Button action={saveTrack}>
          Add "{tracksData.name}" to "{playlistData.name}"
        </Button>
      </div>
    </div>
  );
};

export default TransferConfirmation;
