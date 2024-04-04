import styles from "./style.module.scss";
import cx from "classnames";

interface IconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
}

const IconButton = ({ icon, className, ...rest }: IconButtonProps) => (
  <div className={cx(styles.iconButton, className)} {...rest}>
    {icon}
  </div>
);

export default IconButton;
