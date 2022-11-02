import React, { ReactElement } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { getLayout as getSiteLayout } from "../RootLayout/RootLayout";
import styles from "./HomeLayout.module.scss";

interface Props {
  children: ReactElement;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className={styles.Container}>
      <aside className={styles.Sidebar}>
        <SideBar />
      </aside>
      <section className={styles.Content}>{children}</section>
    </div>
  );
};

export const getLayout = (page: ReactElement) =>
  getSiteLayout(<HomeLayout>{page}</HomeLayout>);

export default HomeLayout;
