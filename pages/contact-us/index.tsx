import React from "react";
import { selectCount } from "../../store/features/counter/counterSlice";
import { useAppSelector } from "../../store/hooks";
import styles from "../../styles/Home.module.scss";

function ContactUs() {
  const count = useAppSelector(selectCount);

  return (
    <div className={styles.Container} style={{ flex: "1" }}>
      <h1>ContactUs</h1>
      <br />
      <h1>Count: {count}</h1>
    </div>
  );
}

export default ContactUs;
