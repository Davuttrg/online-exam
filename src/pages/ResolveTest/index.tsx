import AnswerKey from "../../components/AnswerKey";
import Questions from "../../components/Questions";
import styles from "./style.module.scss";

const ResolveTest = () => {
  return (
    <div className={styles.resolveTest}>
      <div className={styles.resolveTest__questions}>
        <Questions />
      </div>
      <div className={styles.resolveTest__answerKey}>
        <AnswerKey />
      </div>
    </div>
  );
};
export default ResolveTest;
