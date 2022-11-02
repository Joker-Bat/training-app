import React from "react";
import Link from "next/link";

import styles from "./SideBar.module.scss";
import { useRouter } from "next/router";

type NavLinkProps = {
  children: string;
  href: string;
};

const NavLink = ({ children, href }: NavLinkProps) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${styles.NavLink} ${
        router.pathname === href ? styles.Active : ""
      }`}
    >
      {children}
    </Link>
  );
};

function SideBar() {
  return (
    <div className={styles.Container}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/dashboard">Dashboard</NavLink>
      <NavLink href="/profile">Profile</NavLink>
    </div>
  );
}

export default SideBar;
