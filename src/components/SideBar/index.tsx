import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import cx from "classnames";
import { LocalAsset } from "../../constants";

const SideBar = () => {
  const pageNav = [
    {
      icon: LocalAsset.homeIcon,
      path: "home",
    },
    {
      icon: LocalAsset.lessonsIcon,
      path: "lessons",
    },
    {
      icon: LocalAsset.questionsIcon,
      path: "questions",
    },
    {
      icon: LocalAsset.examsIcon,
      path: "exams",
    },
    {
      icon: LocalAsset.guideIcon,
      path: "guide",
    },
    {
      icon: LocalAsset.statisticsIcon,
      path: "statistics",
    },
    {
      icon: LocalAsset.evaluationIcon,
      path: "evaluation",
    },
  ];

  const appNav = [
    {
      icon: LocalAsset.resolverIcon,
      path: "resolver",
    },
    {
      icon: LocalAsset.understandnowIcon,
      path: "understandnow",
    },
    {
      icon: LocalAsset.coachIcoon,
      path: "coach",
    },
  ];

  return (
    <nav className={styles.sideBar}>
      <div>
        <div className={styles.sideBar__logo}>
          <img src={LocalAsset.logo} alt="logo" />
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
        <img src={LocalAsset.adviceIcon} alt="advice" />
      </NavLink>
    </nav>
  );
};
export default SideBar;
