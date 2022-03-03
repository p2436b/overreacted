import Link from 'next/link';
import styles from './PostHeading.module.css';

interface HeadingProps {
  id: number;
  title: string;
  body: string;
}

const PostHeading = ({ id, title, body }: HeadingProps) => {
  const pubDate = new Date();
  pubDate.setDate(pubDate.getDate() - id);

  const pubDateFormated = `
  ${pubDate.toLocaleDateString('en-US', { month: 'long' })} ${pubDate.getDay()}, ${pubDate.getFullYear()}`;

  const readTime = Math.floor(Math.random() * 10 + 1);

  body = body.split(' ').slice(0, 4).join(' ');

  return (
    <article className={styles.postHeading}>
      <header>
        <Link href={`${id}/${title.replaceAll(' ', '-')}`}>
          <a>
            <h1>{title}</h1>
          </a>
        </Link>
        <p>
          {pubDateFormated} • ☕️ {readTime} min read
        </p>
      </header>
      <p>{body}</p>
    </article>
  );
};

export default PostHeading;
