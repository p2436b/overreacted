import ToggleButton from './ToggleButton';
import styles from './SiteHeader.module.css';

const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <h1>Overreacted</h1>
      <ToggleButton />
    </header>
  );
};

export default SiteHeader;
