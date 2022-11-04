import styles from './Search.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTitle } from '../../../redux/currentTitleRedux';
import { fetchSpotifyTracks } from '../../../redux/spotifyTracksRedux';

import { decode } from '../../../utils/decodeHTML';

import Button from '../../features/Button/Button';


const Search = ({ token, setTracksData }) => {

  const dispatch = useDispatch();
  const titleToFind = useSelector(getCurrentTitle);

  const strippedTitle = decode(titleToFind.replace(/(\[).+?(\])/g, '').replace(/(\().+?(\))/g, '')); // removing parts of the title included in brackets

  const handleClick = () => {
    dispatch(fetchSpotifyTracks(token, strippedTitle, setTracksData));
  };

  return (
    <div className={styles.spotify_search}>
      <div className={styles.selector}>
        <p className={styles.title}>{strippedTitle}</p>
        <Button type="spotify" action={handleClick}>
          <span className="fa fa-spotify"></span>
        </Button>
      </div>
    </div>
  );
};

export default Search;
