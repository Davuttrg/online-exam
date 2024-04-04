import cx from "classnames";
import styles from "./style.module.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "small" | "medium";
}

const Button = ({ variant = "medium", children, ...rest }: ButtonProps) => (
  <button
    className={cx(styles.button, {
      [styles["button--small"]!]: variant === "small",
    })}
    {...rest}
  >
    {children}
  </button>
);
export default Button;
