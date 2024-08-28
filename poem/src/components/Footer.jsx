import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.line}>
          <p className={styles.text}>Name: Bhavya Garhwal</p>
          <p className={styles.text}>Phone: +91-7415353133</p>
        </div>
        <div className={styles.line}>
          <p className={styles.text}>
            College Email: f20212111@hyderabad.bits-pilani.ac.in
          </p>
          <p className={styles.text}>
            Personal Email: garhwalbhavya5@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
