import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/h02c4n" target="_blank">
        Hozcan
      </Link>
    </footer>
  );
}

export default Footer;
