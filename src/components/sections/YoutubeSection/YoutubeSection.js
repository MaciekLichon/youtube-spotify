import styles from './YoutubeSection.module.scss';

import SearchForm from '../../youtube/SearchForm/SearchForm';
import VideoDisplay from '../../youtube/VideoDisplay/VideoDisplay';
import VideoDisplayPlaceholder from '../../youtube/VideoDisplayPlaceholder/VideoDisplayPlaceholder';

import { useState } from 'react';


const YoutubeSection = () => {

  const [videoList, setVideoList] = useState(null);

  return (
    <div>
      {videoList && <VideoDisplay data={videoList} />}
      {!videoList && <VideoDisplayPlaceholder />}
      <SearchForm updateVideos={setVideoList} />
    </div>
  );
};

export default YoutubeSection;
