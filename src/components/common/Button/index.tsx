import cx from "classnames";
import styles from "./style.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "small" | "medium";
  color?: "default" | "success";
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
    })}
    {...rest}
  >
    {startIcon} {children} {endIcon}
  </button>
);
export default Button;
