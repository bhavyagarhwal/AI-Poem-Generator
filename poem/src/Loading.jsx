import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.card}>
      <div className={styles.loader}>
        <p>loading</p>
        <div className={styles.words}>
          <span className={styles.word}>buttons</span>
          <span className={styles.word}>forms</span>
          <span className={styles.word}>switches</span>
          <span className={styles.word}>cards</span>
          <span className={styles.word}>buttons</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
