import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import styles from './VideoDisplayPlaceholder.module.scss';
import './customCarousel.scss';


const VideoDisplayPlaceholder = () => {

  return (
    <section className={styles.video_section}>

      <div className={styles.video_container}>
        <Carousel interval={null}>
          <Carousel.Item>
            <div className={styles.square}></div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={styles.video_details}>
        <p className={styles.title}>Song title</p>
        <a href="" className={styles.button_details}>More details</a>
      </div>

    </section>
  );
};

export default VideoDisplayPlaceholder;
