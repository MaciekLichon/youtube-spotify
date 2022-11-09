import styles from './YoutubeSection.module.scss';

import SearchForm from '../../youtube/SearchForm/SearchForm';
import VideoDisplay from '../../youtube/VideoDisplay/VideoDisplay';
import Loader from '../../features/Loader/Loader';
import Guide from '../../features/Guide/Guide';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllVideos } from '../../../redux/youtubeRedux';


const YoutubeSection = ({ activePage }) => {

  const [loading, setLoading] = useState(false);
  const videoList = useSelector(getAllVideos);

  return (
    <div className={styles.youtube_section}>
      {(activePage === 'Guide') && <Guide />}
      {(activePage !== 'Guide' && loading) && <Loader requesting={true} />}
      {(activePage !== 'Guide' && !loading && videoList.length == 0) && <Loader requesting={false} />}
      {(activePage === 'Home' && !loading && videoList.length > 0) && <VideoDisplay data={videoList} />}
      <SearchForm loadingStatus={setLoading} />
    </div>
  );
};

export default YoutubeSection;
