import cx from "classnames";
import styles from "./style.module.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "small" | "medium";
  color?: "default" | "success";
  startIcon?: React.ReactNode;
}

const Button = ({
  variant = "medium",
  color = "default",
  startIcon,
  children,
  className,
  ...rest
}: ButtonProps) => (
  <button
    color=""
    className={cx(styles.button, className, {
      [styles["button--small"]!]: variant === "small",
      [styles["button--success"]!]: color === "success",
    })}
    {...rest}
  >
    {startIcon} {children}
  </button>
);
export default Button;
