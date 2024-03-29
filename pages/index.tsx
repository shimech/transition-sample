import Head from "next/head";
import Link from "next/link";

const Home = () => (
  <>
    <Head>
      <title>Transition Sample</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <ul>
        <li>
          <Link href="/material-ui">
            <a>Material UI</a>
          </Link>
        </li>
        <li>
          <Link href="/react-transition-group">
            <a>React Transition Group</a>
          </Link>
        </li>
        <li>
          <Link href="/full-scratch">
            <a>Full Scratch</a>
          </Link>
        </li>
        <li>
          <Link href="/my-transition-group">
            <a>My Transition Group</a>
          </Link>
        </li>
      </ul>
    </main>
  </>
);

export default Home;
