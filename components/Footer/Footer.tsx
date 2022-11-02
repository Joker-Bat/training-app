import React from "react";
import Link from "next/link";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.Container}>
      <div className={styles.ContactUs}>
        <Link href="contact-us">Contact Us</Link>
      </div>
    </footer>
  );
}

export default Footer;
