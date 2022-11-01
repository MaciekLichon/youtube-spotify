import styles from './SpotifySection.module.scss';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../../redux/spotifyUserRedux';
import { fetchPlaylists } from '../../../redux/spotifyPlaylistsRedux';

import Auth from '../../spotify/Auth/Auth';
import Profile from '../../spotify/Profile/Profile';
import Playlists from '../../spotify/Playlists/Playlists';
import Search from '../../spotify/Search/Search';


const SpotifySection = () => {

  const [token, setToken] = useState('');
  const [userData, setUserData] = useState();
  const [userPlaylists, setUserPlaylists] = useState();

  const dispatch = useDispatch();


  return (
    <>
      <Auth token={token} setToken={setToken} setUserData={setUserData} setUserPlaylists={setUserPlaylists} />
      {userData && <Profile userData={userData} />}
      <Search />
      {userPlaylists && <Playlists userPlaylists={userPlaylists} />}
    </>
  );
};

export default SpotifySection;
