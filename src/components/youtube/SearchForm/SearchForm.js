import styles from './SearchForm.module.scss';

import Button from '../../features/Button/Button';
import TextInput from '../../features/TextInput/TextInput';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchByKeywords, fetchByVideoLink } from '../../../redux/youtubeRedux';


const SearchForm = ({ loadingStatus }) => {

  const [phrase, setPhrase] = useState('');
  const dispatch = useDispatch();

  const youtubeURL = 'https://www.youtube.com/';


  const handleSubmit = e => {
    e.preventDefault();

    if (phrase.includes(youtubeURL)) {
      const videoId = phrase.slice(32);
      dispatch(fetchByVideoLink(videoId, loadingStatus));
    } else {
      dispatch(fetchByKeywords(phrase, loadingStatus));
    }

    setPhrase('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Enter phrase..." value={phrase} onChange={e => setPhrase(e.target.value)} />
      <Button type="youtube">
        <span className="fa fa-youtube"></span>
      </Button>
    </form>
  );
};

export default SearchForm;
