import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Button from "../../common/Button";
import styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  moveNextQuestion,
  moveBackQuestion,
} from "../../../store/slices/examSlice";

const QuestionStepButtons = () => {
  const examState = useAppSelector((state) => state.exam);
  const dispatch = useAppDispatch();

  const handleNext = () => dispatch(moveNextQuestion());
  const handleBack = () => dispatch(moveBackQuestion());

  const isAnswered = examState.userAnswers.find(
    (item) => item.question.id === examState.activeQuestion.id
  );

  return (
    <div className={styles.questionStepButtons}>
      <div>
        {!examState.isFirstQuestion && (
          <Button onClick={handleBack} startIcon={<BiChevronLeft size={24} />}>
            Önceki Soru
          </Button>
        )}
      </div>

      <div>
        <Button
          disabled={!isAnswered}
          onClick={handleNext}
          endIcon={
            examState.isLastQuestion ? null : <BiChevronRight size={24} />
          }
        >
          {examState.isLastQuestion ? "Testi Bitir" : "Sonraki Soru"}
        </Button>
      </div>
    </div>
  );
};
export default QuestionStepButtons;
