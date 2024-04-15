import { useParams } from "react-router-dom";
import AnswerKey from "../../components/AnswerKey";
import Questions from "../../components/Questions";
import styles from "./style.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { adjustActiveQuestion } from "../../store/slices/examSlice";
import { BiCheckDouble } from "react-icons/bi";
import Card from "../../components/common/Card";

const ResolveTest = () => {
  const { questionId } = useParams();
  const examState = useAppSelector((state) => state.exam);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (questionId) {
      const question = examState.questions.find(
        (item) => item.id === Number(questionId)
      );
      if (question) dispatch(adjustActiveQuestion(question));
    }
  }, [dispatch, examState, questionId]);

  return (
    <div className={styles.resolveTest}>
      {examState.isDone ? (
        <Card className={styles.resolveTest__done}>
          <BiCheckDouble className={styles.resolveTest__doneIcon} size={100} />
          <h3>Testi Tamamlandınız</h3>
        </Card>
      ) : (
        <>
          <div className={styles.resolveTest__questions}>
            <Questions />
          </div>
          <div className={styles.resolveTest__answerKey}>
            <AnswerKey />
          </div>
        </>
      )}
    </div>
  );
};
export default ResolveTest;
