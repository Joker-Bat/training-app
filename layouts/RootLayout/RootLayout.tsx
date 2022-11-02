import React, { ReactElement } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import styles from "./RootLayout.module.scss";

interface Props {
  children: ReactElement;
}

function Layout({ children }: Props) {
  return (
    <div className={styles.Container}>
      <Header />
      <main className={styles.Main}>{children}</main>
      <Footer />
    </div>
  );
}

export const getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Layout;
