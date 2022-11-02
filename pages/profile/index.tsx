import React, { useEffect } from "react";

import styles from "../../styles/Home.module.scss";
import { getLayout } from "../../layouts/HomeLayout/HomeLayout";
import { NextPageWithLayout } from "../../types/page";

const Profile: NextPageWithLayout = () => {
  useEffect(() => {
    console.log("Profile Mounted");

    return () => {
      console.log("Profile Unmounted");
    };
  }, []);

  return (
    <div className={styles.Container}>
      <h1>Profile</h1>
    </div>
  );
};

Profile.getLayout = getLayout;

export default Profile;
