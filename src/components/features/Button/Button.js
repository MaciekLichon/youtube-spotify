import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = props => {

  return (
    <button onClick={props.action} className={clsx(
        styles.button,
        props.type === "youtube" && styles.youtube,
        props.type === "spotify" && styles.spotify,
        props.type === "confirmation" && styles.confirmation,
        props.saved && styles.saved)
    }>
      {props.children}
    </button>
  );
};

export default Button;
