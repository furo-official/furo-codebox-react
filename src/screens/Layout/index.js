import React from "react";
import Footer from "./Footer";
import styles from "../../styles/layout.module.css";

const LayoutWithRoute = ({ children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.row}>
        <div className={styles.container}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutWithRoute;
