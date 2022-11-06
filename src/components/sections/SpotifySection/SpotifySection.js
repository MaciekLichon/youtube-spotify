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



const SpotifySection = () => {

  const [token, setToken] = useState();
  const [userData, setUserData] = useState();
  const [userPlaylists, setUserPlaylists] = useState();
  const [tracksData, setTracksData] = useState();
  const [currentPlaylist, setCurrentPlaylist] = useState();

  const titleToFind = useSelector(getCurrentTitle);

  return (
    <>
      <Auth token={token} setToken={setToken} setUserData={setUserData} setUserPlaylists={setUserPlaylists} setCurrentPlaylist={setCurrentPlaylist} setTracksData={setTracksData} />
      {userData && <Profile userData={userData} />}
      {userPlaylists && <Playlists userPlaylists={userPlaylists} setCurrentPlaylist={setCurrentPlaylist} />}
      {(userData && titleToFind) && <Search token={token} setTracksData={setTracksData} titleToFind={titleToFind} />}
      {tracksData && <TrackPlayer tracksData={tracksData} />}
      {tracksData && <TransferConfirmation currentPlaylist={currentPlaylist} tracksData={tracksData} token={token} />}
    </>
  );
};

export default SpotifySection;
