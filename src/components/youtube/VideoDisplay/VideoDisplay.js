import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import styles from './VideoDisplay.module.scss';
import './customCarousel.scss';


const VideoDisplay = ({ data }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <section className={styles.video_section}>

      <div className={styles.video_container}>
        <Carousel interval={null} activeIndex={currentIndex} onSelect={handleSelect}>
          {data.map(item => (
            <Carousel.Item key={item.id.videoId || item.id}>
              <iframe
                src={`https://www.youtube.com/embed/${item.id.videoId || item.id}`}
                title={item.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className={styles.video_details}>
        <p className={styles.title}>{data[currentIndex].snippet.title}</p>
        <a href="" className={styles.button_details}>More details</a>
      </div>

    </section>
  );
};

export default VideoDisplay;


// <Carousel interval={null}>
//     <Carousel.Item>
//       <iframe
//         src={`https://www.youtube.com/embed/ly36kn0ug4k`}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen>
//       </iframe>
//     </Carousel.Item>
// </Carousel>
