import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

const MainLayout = () => {
  return (
    <main>
      <SideBar />
      Main Layout
      <Outlet />
    </main>
  );
};

export default MainLayout;
