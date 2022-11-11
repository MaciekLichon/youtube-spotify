import styles from './SpotifySection.module.scss';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchUserData } from '../../../redux/spotifyUserRedux';
import { fetchPlaylists } from '../../../redux/spotifyPlaylistsRedux';
import { getCurrentTitle } from '../../../redux/currentTitleRedux';

import Auth from '../../spotify/Auth/Auth';
import Profile from '../../spotify/Profile/Profile';
import Playlists from '../../spotify/Playlists/Playlists';
import Search from '../../spotify/Search/Search';
import TrackPlayer from '../../spotify/TrackPlayer/TrackPlayer';
import TransferConfirmation from '../../spotify/TransferConfirmation/TransferConfirmation';
import Preview from '../../spotify/Preview/Preview';
import Popup from '../../features/Popup/Popup';


const SpotifySection = () => {

  const [token, setToken] = useState();
  const [userData, setUserData] = useState();
  const [userPlaylists, setUserPlaylists] = useState();
  const [tracksData, setTracksData] = useState();
  const [currentPlaylist, setCurrentPlaylist] = useState();

  const [showPopup, setShowPopup] = useState(false);
  const [errorReason, setErrorReason] = useState('');

  const titleToFind = useSelector(getCurrentTitle);


  return (
    <div className={styles.spotify_section}>
      <Auth token={token} setToken={setToken} setUserData={setUserData} setUserPlaylists={setUserPlaylists} setCurrentPlaylist={setCurrentPlaylist} setTracksData={setTracksData} setShowPopup={setShowPopup} setErrorReason={setErrorReason} />
      {!token && <Preview />}
      {userData && <Profile userData={userData} />}
      {userPlaylists && <Playlists userPlaylists={userPlaylists} setCurrentPlaylist={setCurrentPlaylist} />}
      {(userData && titleToFind && userPlaylists) && <Search token={token} setTracksData={setTracksData} titleToFind={titleToFind} setShowPopup={setShowPopup} setErrorReason={setErrorReason} />}
      {tracksData && <TrackPlayer tracksData={tracksData} />}
      {tracksData && <TransferConfirmation currentPlaylist={currentPlaylist} tracksData={tracksData} token={token} />}

      {(showPopup && errorReason === 'playlists') && <Popup showPopup={showPopup} setShowPopup={setShowPopup}>You have no Spotify playlists.</Popup> }
      {(showPopup && errorReason === 'track') && <Popup showPopup={showPopup} setShowPopup={setShowPopup}>No tracks found. Try again.</Popup> }
      {(showPopup && errorReason === 'response') && <Popup showPopup={showPopup} setShowPopup={setShowPopup}>Your session has expired. Log in again.</Popup> }
    </div>
  );
};

export default SpotifySection;
