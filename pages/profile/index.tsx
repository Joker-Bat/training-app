import React, { useEffect } from "react";

import styles from "../../styles/Home.module.scss";
import { getLayout } from "../../layouts/HomeLayout/HomeLayout";
import { NextPageWithLayout } from "../../types/page";
import { useAppSelector } from "../../store/hooks";
import { selectCount } from "../../store/features/counter/counterSlice";

const Profile: NextPageWithLayout = () => {
  const count = useAppSelector(selectCount);

  useEffect(() => {
    console.log("Profile Mounted");

    return () => {
      console.log("Profile Unmounted");
    };
  }, []);

  return (
    <div className={styles.Container}>
      <h1>Profile</h1>
      <br />
      <h1>Count: {count}</h1>
    </div>
  );
};

Profile.getLayout = getLayout;

export default Profile;
