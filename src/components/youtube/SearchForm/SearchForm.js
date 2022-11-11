import styles from './SearchForm.module.scss';

import Button from '../../features/Button/Button';
import TextInput from '../../features/TextInput/TextInput';
import Popup from '../../features/Popup/Popup';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchByKeywords, fetchByVideoLink } from '../../../redux/youtubeRedux';


const SearchForm = ({ loadingStatus }) => {

  const [phrase, setPhrase] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();
  const youtubeURL = 'https://www.youtube.com/';


  const handleSubmit = e => {
    e.preventDefault();

    if (phrase.includes(youtubeURL)) {
      const videoId = phrase.slice(32);
      dispatch(fetchByVideoLink(videoId, loadingStatus, setShowPopup));
    } else {
      dispatch(fetchByKeywords(phrase, loadingStatus, setShowPopup));
    }

    setPhrase('');
  };

  return (
    <>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <TextInput placeholder="Enter phrase..." value={phrase} onChange={e => setPhrase(e.target.value)} />
        <Button type="youtube">
          <span className="fa fa-youtube"></span>
        </Button>
      </form>
      {showPopup &&
        <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
          No results found.
        </Popup>
      }
    </>
  );
};

export default SearchForm;
