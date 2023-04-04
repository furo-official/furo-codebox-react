import { Outlet } from "react-router-dom";
import styles from "../../styles/layout.module.css";
import Footer from "./Footer";

const LayoutWithRoute = () => {
  return (
    <div className={styles.background}>
      <div className={styles.row}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default LayoutWithRoute;
