import YoutubeSection from '../../sections/YoutubeSection/YoutubeSection';
import NavBar from '../../sections/NavBar/NavBar';
import Header from '../../sections/Header/Header';

import styles from './LeftSide.module.scss';

import { useState } from 'react';

const LeftSide = () => {

  const [activePage, setActivePage] = useState('Home');

  return (
    <div className={styles.left_side}>
      <Header />
      <NavBar activePage={activePage} setActivePage={setActivePage} />
      <YoutubeSection activePage={activePage} />
    </div>
  );
};

export default LeftSide;
