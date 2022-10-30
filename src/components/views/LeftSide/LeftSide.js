import YoutubeSection from '../../sections/YoutubeSection/YoutubeSection';
import NavBar from '../../sections/NavBar/NavBar';
import Header from '../../sections/Header/Header';

import styles from './LeftSide.module.scss';


const LeftSide = () => {
  return (
    <div className={styles.left_side}>
      <Header />
      <NavBar />
      <YoutubeSection />
    </div>
  );
};

export default LeftSide;
