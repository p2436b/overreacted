import Image from 'next/image';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <aside>
      <div className={styles.Banner}>
        <Image width={60} height={60} src='/profile.jpg' alt='Profile picture' />
        <p>
          Personal blog by <a href='#'>Dan Abramov</a>.<br /> I explain with words and code.
        </p>
      </div>
    </aside>
  );
};

export default Banner;
