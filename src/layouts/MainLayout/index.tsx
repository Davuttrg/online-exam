import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import styles from "./style.module.scss";

const MainLayout = () => {
  return (
    <main className={styles.mainLayout}>
      <SideBar />

      <div className={styles.mainLayout__container}>
        <h1>Main Layout</h1>
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
