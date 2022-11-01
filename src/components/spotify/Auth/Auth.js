import styles from './Auth.module.scss';

import Button from '../../features/Button/Button';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateSpotifyToken } from '../../../redux/spotifyTokenRedux';
import { updateSpotifyUser, fetchUserData } from '../../../redux/spotifyUserRedux';
import { updateSpotifyPlaylists, fetchPlaylists } from '../../../redux/spotifyPlaylistsRedux';


const Auth = ({ token, setToken, setUserData, setUserPlaylists }) => {

  const dispatch = useDispatch();

  const CLIENT_ID = '8f83a58e02ac41d5852ba8a881616bac';
  const REDIRECT_URI = 'http://localhost:3000/';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  const SCOPES = 'playlist-modify-private playlist-modify-public playlist-read-private playlist-read-collaborative';
  const SHOW_DIALOG = 'true'
  const link = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}&show_dialog=${SHOW_DIALOG}`;

  console.log('auth');

  useEffect(() => {
    const hash = window.location.hash;

    if (!token && hash) {
      let urlParams = new URLSearchParams(hash.replace('#', '?'));
      let newToken = urlParams.get('access_token');
      // console.log(newToken);

      setToken(newToken);
      dispatch(updateSpotifyToken(newToken));
      dispatch(fetchUserData(newToken, setUserData));
      dispatch(fetchPlaylists(newToken, setUserPlaylists));

      window.location.hash = '';
    }
  }, []);

  const logout = () => {
    setToken('');
    setUserData(null);
    setUserPlaylists([]);
    dispatch(updateSpotifyToken(''));
    dispatch(updateSpotifyUser(null));
    dispatch(updateSpotifyPlaylists([]));
  }

  const login = () => {
    window.location=`${link}`;
  }


  return (
    <div className={styles.auth}>
      {!token && <Button action={login} type='spotify'>spotify log in</Button>}
      {token && <Button action={logout} type='spotify'>spotify log out</Button>}
    </div>
  );
};

export default Auth;
