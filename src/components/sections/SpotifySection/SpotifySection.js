import styles from './SpotifySection.module.scss';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../../redux/spotifyUserRedux';
import { fetchPlaylists } from '../../../redux/spotifyPlaylistsRedux';

import Auth from '../../spotify/Auth/Auth';
import Profile from '../../spotify/Profile/Profile';
import Playlists from '../../spotify/Playlists/Playlists';
import Search from '../../spotify/Search/Search';
import TrackPlayer from '../../spotify/TrackPlayer/TrackPlayer';
import TransferConfirmation from '../../spotify/TransferConfirmation/TransferConfirmation';



const SpotifySection = () => {

  const [token, setToken] = useState('');
  const [userData, setUserData] = useState();
  const [userPlaylists, setUserPlaylists] = useState();
  const [tracksData, setTracksData] = useState();
  const [currentPlaylist, setCurrentPlaylist] = useState();

  const dispatch = useDispatch();


  return (
    <>
      <Auth token={token} setToken={setToken} setUserData={setUserData} setUserPlaylists={setUserPlaylists} />
      {userData && <Profile userData={userData} />}
      <Search token={token} setTracksData={setTracksData} />
      {tracksData && <TrackPlayer tracksData={tracksData} />}
      {userPlaylists && <Playlists userPlaylists={userPlaylists} setCurrentPlaylist={setCurrentPlaylist} />}
      {tracksData && <TransferConfirmation currentPlaylist={currentPlaylist} tracksData={tracksData} token={token} />}
    </>
  );
};

export default SpotifySection;
