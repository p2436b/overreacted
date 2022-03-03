import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Banner from '../components/Banner';
import PostHeading from '../components/PostHeading';
import SiteHeader from '../components/SiteHeader';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Home.module.css';
import { Post } from '../share/types';

const Home: NextPage = () => {
  const postsList = useFetch<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  const isDarkTheme = useSelector((store) => store);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.dataset.theme = 'dark';
    } else {
      document.body.dataset.theme = 'light';
    }
  }, [isDarkTheme]);

  if (!postsList) return <p className={styles.loading}>Loading...</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Overreacted - A blog by Dan Abramov</title>
        <meta name='description' content='Overreacted - A blog by Dan Abramov' />
        <link rel='icon' href='/favicon.png' type='image/png' />
      </Head>

      <SiteHeader />
      <Banner />
      <main className={styles.main}>
        {postsList?.map((post) => (
          <PostHeading key={post.id} id={post.id} title={post.title} body={post.body} />
        ))}
      </main>

      <footer className={styles.footer}>
        <div>
          <a href='#'>twitter</a> • <a href='#'>github</a> • <a href='#'>stack overflow</a>
        </div>
        <div>
          <a href='#'>rss</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
