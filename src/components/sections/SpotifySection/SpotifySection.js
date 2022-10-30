import styles from './SpotifySection.module.scss';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../../redux/spotifyUserRedux';

import Auth from '../../spotify/Auth/Auth';
import Profile from '../../spotify/Profile/Profile';

const SpotifySection = () => {

  const [token, setToken] = useState('');
  const [userData, setUserData] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData(token, setUserData));
    }
  }, [token])


  return (
    <>
      <Auth token={token} setToken={setToken} setUserData={setUserData} />
      {userData && <Profile userData={userData} />}
    </>
  );
};

export default SpotifySection;
