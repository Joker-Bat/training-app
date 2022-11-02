import styles from "../styles/Home.module.scss";

import { getLayout } from "../layouts/HomeLayout/HomeLayout";
import { NextPageWithLayout } from "../types/page";

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.Container}>
      <h1>Home page</h1>
    </div>
  );
};

Home.getLayout = getLayout;

export default Home;
