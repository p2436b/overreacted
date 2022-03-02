import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ToggleButton.module.css';
import { setDarkTheme } from '../redux/actions/themeActions';

const ToggleButton = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((store) => store);

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDarkTheme(e.target.checked));
  };

  return (
    <label className={styles.switch}>
      <input type='checkbox' checked={isDarkTheme} onChange={handleToggle} />
      <span className={`${styles['slider']} ${styles['round']}`}>
        <img width='12' height='12' src='/moon.png' alt='moon' />
        <img width='15' height='15' src='/sun.png' alt='sub' />
      </span>
    </label>
  );
};

export default ToggleButton;
