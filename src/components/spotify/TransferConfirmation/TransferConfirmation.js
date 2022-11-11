import styles from './TransferConfirmation.module.scss';

import Button from '../../features/Button/Button';
import Popup from '../../features/Popup/Popup';

import { useState } from 'react';
import { getSpotifyPlaylistById } from '../../../redux/spotifyPlaylistsRedux';
import { useSelector } from 'react-redux';

const TransferConfirmation = ({ currentPlaylist, tracksData, token }) => {

  const playlistData = useSelector(state => getSpotifyPlaylistById(state, currentPlaylist));

  const [isSaved, setIsSaved] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('Save it!');
  const [showPopup, setShowPopup] = useState(false);

  const saveTrack = () => {

    // console.log('currentPlaylist', currentPlaylist);
    // console.log('tracksData = id', tracksData);
    // console.log('uri', tracksData.uri);
    // console.log('playlistData', playlistData);

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    fetch(`https://api.spotify.com/v1/playlists/${playlistData.id}/tracks?uris=${tracksData.uri}`, options)
      .then(res => {
        if (res.status === 201) {
          return res.json()
            .then(data => {
              setIsSaved(true);
              setButtonMessage('Saved!');

              setTimeout(() => {
                setIsSaved(false);
                setButtonMessage('Save it!');
              }, 1000);
            });
        } else {
          setShowPopup(true);
        }
      });
  };

  return (
    <>
      <div className={styles.confirmation_container}>
        <div className={styles.confirmation_button}>
          <Button action={saveTrack} type="confirmation" saved={isSaved}>
            {buttonMessage}
          </Button>
        </div>
      </div>
      {showPopup &&
        <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
          Something went wrong.
        </Popup>
      }
    </>
  );
};

export default TransferConfirmation;
