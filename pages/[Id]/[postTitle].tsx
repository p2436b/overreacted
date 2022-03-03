import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SiteHeader from '../../components/SiteHeader';
import useFetch from '../../hooks/useFetch';
import styles from '../../styles/Home.module.css';
import { Post } from '../../share/types';

const Post: NextPage = () => {
  const isDarkTheme = useSelector((store) => store);
  useEffect(() => {
    if (isDarkTheme) document.body.dataset.theme = 'dark';
    else document.body.dataset.theme = 'light';
  }, [isDarkTheme]);

  const { query } = useRouter();
  const post = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${query.Id}`);

  if (!post) return <p className={styles.loading}>Loading...</p>;

  const pubDate = new Date();
  pubDate.setDate(pubDate.getDate() - post.id);
  const pubDateFormated = `
  ${pubDate.toLocaleDateString('en-US', { month: 'long' })} ${pubDate.getDay()}, ${pubDate.getFullYear()}`;

  const readTime = Math.floor(Math.random() * 10 + 1);

  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.title} />
        <link rel='icon' href='/favicon.png' type='image/png' />
      </Head>
      <SiteHeader />
      <main className={styles.main}>
        <article>
          <header className={styles.postHeader}>
            <h1>{post.title}</h1>
            <p>
              {pubDateFormated} • ☕️ {readTime} min read
            </p>
          </header>
          <div>
            <p>{post.body}</p>
          </div>
        </article>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Post;
