import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './PostHeading.module.css';

interface IHeadingProps {
  title: string;
  pubDate: Date;
}
const PostHeading = ({ title }: IHeadingProps) => {
  const router = useRouter();

  return (
    <article className={styles.postHeading}>
      <header>
        <Link href={`/${title}`}>
          <a>
            <h1>{title}</h1>
          </a>
        </Link>
        <p>January 11, 2020 • ☕️ 5 min read</p>
      </header>
      <p>Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)</p>
    </article>
  );
};

export default PostHeading;
