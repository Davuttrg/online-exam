import { useState } from "react";
import { Answer, AnswerValueType } from "../type";
import styles from "./style.module.scss";
import cx from "classnames";
import Button from "../../common/Button";
import { BiPlayCircle } from "react-icons/bi";

interface QuestionAnswerItemProps {
  answer: Answer;
  onChange: (answer: AnswerValueType) => void;
  isSelected: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  readOnly?: boolean;
  displayAnswerVideo?: boolean;
}
const QuestionAnswerItem = ({
  answer,
  onChange,
  isSelected,
  isSuccess,
  isError,
  readOnly,
  displayAnswerVideo,
}: QuestionAnswerItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = () => {
    if (!readOnly) onChange(answer.value);
  };

  return (
    <div
      className={cx(styles.questionAnswerItem, {
        [styles["questionAnswerItem--selected"]!]: isSelected,
        [styles["questionAnswerItem--readonly"]!]: readOnly,
        [styles["questionAnswerItem--success"]!]: isSuccess,
        [styles["questionAnswerItem--error"]!]: isError,
      })}
      onClick={handleChange}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        readOnly={readOnly}
        type="radio"
        name="option"
        checked={isSelected}
        value={answer.value}
        onChange={handleChange}
      />
      <div className={styles.questionAnswerItem__label}>
        <div className={styles.questionAnswerItem__labelText}>
          <p>{answer.value})</p>{" "}
          <p dangerouslySetInnerHTML={{ __html: answer.text }} />
        </div>
        {isHovered && !isSelected && !readOnly && (
          <Button
            className={styles.questionAnswerItem__labelAction}
            color="success"
          >
            Cevapla
          </Button>
        )}

        {displayAnswerVideo && (
          <Button
            startIcon={<BiPlayCircle size={24} />}
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
