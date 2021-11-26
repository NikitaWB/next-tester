import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Legends List | Home</title>
        <meta name='keywords' content='legends' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Welcome legends! So this is my first Next.js project where I learn how
          to use and build a application with Next.js and get it up and running. I will also have a separate page for
          where I will write the code with Typescript. You can find that page in
          the Navbar called Typescript.
        </p>
        <Link href='/legends'>
          <a className={styles.btn}>See Legend Listing</a>
        </Link>
      </div>
    </>
  );
}
