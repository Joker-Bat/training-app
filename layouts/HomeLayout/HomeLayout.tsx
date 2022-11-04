import React, { ReactElement, useState, useRef, useEffect } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

import SideBar from "../../components/SideBar/SideBar";
import { getLayout as getSiteLayout } from "../RootLayout/RootLayout";
import styles from "./HomeLayout.module.scss";

interface Props {
  children: ReactElement;
}

const HomeLayout = ({ children }: Props) => {
  const router = useRouter();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navBarRef = useRef<HTMLElement | null>(null);

  // Close navbar if we clicked outside of navbar
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navBarRef.current && !navBarRef.current.contains(e.target as Node)) {
        setIsNavExpanded(false);
      }
    };
    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  // Close navbar if url changed
  useEffect(() => {
    setIsNavExpanded(false);
  }, [router.pathname]);

  return (
    <div className={styles.Container}>
      <aside
        ref={navBarRef}
        className={`${styles.Sidebar} ${isNavExpanded ? styles.Active : ""}`}
      >
        <SideBar />
        <span
          className={styles.ExpandIcon}
          onClick={() => setIsNavExpanded((p) => !p)}
        >
          <BsFillArrowRightCircleFill />
        </span>
      </aside>
      <section className={styles.Content}>{children}</section>
    </div>
  );
};

export const getLayout = (page: ReactElement) =>
  getSiteLayout(<HomeLayout>{page}</HomeLayout>);

export default HomeLayout;
