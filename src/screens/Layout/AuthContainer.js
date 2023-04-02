import React from "react";
import Footer from "./Footer";
import styles from "../../styles/layout.module.css";
import { Outlet } from "react-router-dom";

const AuthContainer = () => {
  return (
    <div className={styles.background}>
      <div className={styles.row}>
        <div className={styles.container}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthContainer;
