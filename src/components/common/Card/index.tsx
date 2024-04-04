import styles from "./style.module.scss";
import cx from "classnames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ children, className, ...rest }: CardProps) => (
  <div className={cx(styles.card, className)} {...rest}>
    {children}
  </div>
);

export default Card;
