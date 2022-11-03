import React, { useEffect } from "react";

import styles from "../../styles/Home.module.scss";
import { getLayout } from "../../layouts/HomeLayout/HomeLayout";
import { NextPageWithLayout } from "../../types/page";
import { useAppSelector } from "../../store/hooks";
import { selectCount } from "../../store/features/counter/counterSlice";

const Dashboard: NextPageWithLayout = () => {
  const count = useAppSelector(selectCount);

  useEffect(() => {
    console.log("Dashboard Mounted");

    return () => {
      console.log("Dashboard Unmounted");
    };
  }, []);

  return (
    <div className={styles.Container}>
      <h1>Dashboard</h1>
      <br />
      <h1>Count: {count}</h1>
    </div>
  );
};

Dashboard.getLayout = getLayout;

export default Dashboard;
