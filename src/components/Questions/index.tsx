import { useAppSelector } from "../../store/hooks";
import Card from "../common/Card";
import IconButton from "../common/IconButton";
import QuestionStepButtons from "./QuestionStepButtons";
import QuestionWrapper from "./QuestionWrapper";
import styles from "./style.module.scss";
import {
  BiPaint,
  BiZoomIn,
  BiZoomOut,
  BiErrorCircle,
  BiCheckDouble,
} from "react-icons/bi";

const Questions = () => {
  const examState = useAppSelector((state) => state.exam);

  return (
    <div className={styles.questions}>
      <h2 className={styles.questions__title}> Konu Tarama Testi #1</h2>
      {examState.isDone ? (
        <Card className={styles.questions__done}>
          <BiCheckDouble className={styles.questions__doneIcon} size={100} />
          <h3>Testi Tamamlandınız</h3>
        </Card>
      ) : (
        <>
          <Card className={styles.questions__card}>
            <div className={styles.questions__cardToolbar}>
              <div className={styles.questions__cardToolbarBadge}>
                <h6>Soru: Türkçe #{examState.activeQuestion.order}</h6>
              </div>
              <div className={styles.questions__cardToolbarActions}>
                <IconButton icon={<BiPaint size={24} />}></IconButton>
                <IconButton icon={<BiZoomIn size={24} />}></IconButton>
                <IconButton icon={<BiZoomOut size={24} />}></IconButton>
                <IconButton
                  icon={<BiErrorCircle color="var(--color-error)" size={24} />}
                ></IconButton>
              </div>
            </div>
            <QuestionWrapper />
          </Card>
          <div className={styles.questions__footer}>
            <QuestionStepButtons />
          </div>
        </>
      )}
    </div>
  );
};

export default Questions;
