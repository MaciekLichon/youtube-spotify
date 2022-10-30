import styles from './RightSide.module.scss';

import SpotifySection from '../../sections/SpotifySection/SpotifySection';

const RightSide = () => {
  return (
    <div className={styles.right_side}>
      <SpotifySection />
    </div>
  );
};

export default RightSide;
