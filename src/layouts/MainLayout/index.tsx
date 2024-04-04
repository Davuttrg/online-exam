import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import styles from "./style.module.scss";
import BackButton from "../../components/BackButton";

const MainLayout = () => {
  return (
    <main className={styles.mainLayout}>
      <SideBar />

      <div className={styles.mainLayout__container}>
        <div className={styles.mainLayout__containerBackButton}>
          <BackButton />
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
