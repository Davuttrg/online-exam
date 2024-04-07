import cx from "classnames";
import styles from "./style.module.scss";

interface SwitchProps {
  checked?: boolean;
  onChange?: () => void;
  className?: string;
}

const Switch = ({ checked, onChange, className }: SwitchProps) => {
  return (
    <div className={cx(styles.switch, className)}>
      <div className={styles.switch__container}>
        <input
          onChange={onChange}
          className={styles.switch__containerInput}
          type="checkbox"
          checked={checked}
        />
        <span className={styles.switch__containerSlider}></span>
      </div>
    </div>
  );
};

export default Switch;
