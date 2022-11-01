import styles from './Search.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTitle } from '../../../redux/currentTitleRedux';

import Button from '../../features/Button/Button';


const Search = () => {

  const dispatch = useDispatch();
  const titleToFind = useSelector(getCurrentTitle);

  const strippedTitle = titleToFind.replace(/(\[).+?(\])/g, '').replace(/(\().+?(\))/g, ''); // removing parts of the title included in brackets

  return (
    <div className={styles.spotify_search}>
      <div className={styles.selector}>
        <p className={styles.title}>{strippedTitle}</p>
        <Button type="spotify">
          <span className="fa fa-spotify"></span>
        </Button>
      </div>
    </div>
  );
};

export default Search;
