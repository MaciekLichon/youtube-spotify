import styles from './NavBar.module.scss';
import clsx from 'clsx';

const NavBar = ({ activePage, setActivePage }) => {

  const buttons = ['Home', 'Guide'];

  const handleClick = (event) => {
    setActivePage(event.target.innerText);
  }

  return (
    <nav>
      <div className={styles.options}>
        {buttons.map(button => (
          <button
            key={button}
            className={clsx(styles.nav_button, activePage === button && styles.active)}
            onClick={handleClick}
          >
          {button}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
