import React from "react";
import Link from "next/link";

import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.Container}>
      <div className={styles.Logo}>
        <Link href="/">Logo</Link>
      </div>
    </header>
  );
}

export default Header;
