import cx from "classnames";
import styles from "./style.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "small" | "medium";
  color?: "default" | "success" | "warning" | "error";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = ({
  variant = "medium",
  color = "default",
  startIcon,
  endIcon,
  children,
  className,
  ...rest
}: ButtonProps) => (
  <button
    className={cx(styles.button, className, {
      [styles["button--small"]!]: variant === "small",
      [styles["button--success"]!]: color === "success",
      [styles["button--warning"]!]: color === "warning",
      [styles["button--error"]!]: color === "error",
    })}
    {...rest}
  >
    {startIcon} {children} {endIcon}
  </button>
);
export default Button;
