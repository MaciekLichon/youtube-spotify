import styles from './YoutubeSection.module.scss';

import SearchForm from '../../youtube/SearchForm/SearchForm';
import VideoDisplay from '../../youtube/VideoDisplay/VideoDisplay';
import Loader from '../../features/Loader/Loader';
import Guide from '../../features/Guide/Guide';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllVideos } from '../../../redux/youtubeRedux';


const YoutubeSection = ({ activePage }) => {

  // const [videoList, setVideoList] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(loading);

  const videoList = useSelector(getAllVideos);
  console.log(videoList);

  //updateVideos={setVideoList}

  return (
    <div>
      {(activePage === 'Guide') && <Guide />}
      {(activePage !== 'Guide' && loading) && <Loader requesting={true} />}
      {(activePage !== 'Guide' && !loading && videoList.length == 0) && <Loader requesting={false} />}
      {(activePage === 'Home' && !loading && videoList.length > 0) && <VideoDisplay data={videoList} />}
      <SearchForm loadingStatus={setLoading} />
    </div>
  );
};

export default YoutubeSection;
