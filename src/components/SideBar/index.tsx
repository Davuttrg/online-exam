import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import cx from "classnames";

const SideBar = () => {
  const pageNav = [
    {
      icon: "./images/sidebar/anasayfa.svg",
      path: "home",
    },
    {
      icon: "./images/sidebar/dersler.svg",
      path: "lessons",
    },
    {
      icon: "./images/sidebar/sorubankasi.svg",
      path: "questions",
    },
    {
      icon: "./images/sidebar/denemesinavlari.svg",
      path: "exams",
    },
    {
      icon: "./images/sidebar/rehberlik-video.svg",
      path: "guide",
    },
    {
      icon: "./images/sidebar/istatistik.svg",
      path: "statistics",
    },
    {
      icon: "./images/sidebar/olcme-degerlendirme.svg",
      path: "evaluation",
    },
  ];

  const appNav = [
    {
      icon: "./images/sidebar/cozucu-app.svg",
      path: "resolver",
    },
    {
      icon: "./images/sidebar/simdianladim.svg",
      path: "understandnow",
    },
    {
      icon: "./images/sidebar/kocumyanimda.svg",
      path: "coach",
    },
  ];

  return (
    <nav className={styles.sideBar}>
      <div>
        <div className={styles.sideBar__logo}>
          <img src="./images/sidebar/logo.svg" alt="logo" />
        </div>
        <div className={styles.sideBar__list}>
          {pageNav.map((item) => (
            <NavLink
              key={item.path}
              to={`${item.path}`}
              className={({ isActive }) =>
                cx(styles.sideBar__listItem, {
                  [styles["sideBar__listItem--active"]!]: !!isActive,
                })
              }
            >
              <img src={item.icon} alt={item.path} />
            </NavLink>
          ))}
        </div>
        <div className={styles.sideBar__list}>
          {appNav.map((item) => (
            <NavLink
              key={item.path}
              className={styles.sideBar__listItem}
              to={`${item.path}`}
            >
              <img src={item.icon} alt={item.path} />
            </NavLink>
          ))}
        </div>
      </div>
      <NavLink className={styles.sideBar__listItem} to="/advice">
        <img src="./images/sidebar/gorusoneri.svg" alt="advice" />
      </NavLink>
    </nav>
  );
};
export default SideBar;
