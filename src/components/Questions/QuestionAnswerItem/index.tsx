import { useState } from "react";
import { Answer, AnswerValueType } from "../type";
import styles from "./style.module.scss";
import cx from "classnames";
import Button from "../../common/Button";

interface QuestionAnswerItemProps {
  answer: Answer;
  realAnswerValue?: AnswerValueType;
  onChange: (answer: Answer) => void;
  isSelected: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}
const QuestionAnswerItem = ({
  answer,
  realAnswerValue,
  onChange,
  isSelected,
  isSuccess,
  isError,
}: QuestionAnswerItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const displayAnswerVideo = answer.value === realAnswerValue;

  return (
    <div
      className={cx(styles.questionAnswerItem, {
        [styles["questionAnswerItem--selected"]!]: isSelected,
        [styles["questionAnswerItem--success"]!]: isSuccess,
        [styles["questionAnswerItem--error"]!]: isError,
      })}
      onClick={() => onChange(answer)}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        type="radio"
        name="option"
        checked={isSelected}
        value={answer.value}
      />
      <div className={styles.questionAnswerItem__label}>
        <p>
          {answer.value}) {answer.text}
        </p>
        {isHovered && !isSelected && (
          <Button
            className={styles.questionAnswerItem__labelAction}
            color="success"
          >
            Cevapla
          </Button>
        )}

        {displayAnswerVideo && (
          <Button
            className={styles.questionAnswerItem__labelAction}
            color="success"
          >
            Çözüm Videosu
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionAnswerItem;
