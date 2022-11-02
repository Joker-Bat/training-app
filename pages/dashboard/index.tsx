import React, { useEffect } from "react";

import styles from "../../styles/Home.module.scss";
import { getLayout } from "../../layouts/HomeLayout/HomeLayout";
import { NextPageWithLayout } from "../../types/page";

const Dashboard: NextPageWithLayout = () => {
  useEffect(() => {
    console.log("Dashboard Mounted");

    return () => {
      console.log("Dashboard Unmounted");
    };
  }, []);

  return (
    <div className={styles.Container}>
      <h1>Dashboard</h1>
    </div>
  );
};

Dashboard.getLayout = getLayout;

export default Dashboard;
