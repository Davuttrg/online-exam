import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Button from "../../common/Button";
import styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useCallback, useMemo } from "react";
import { finishExam } from "../../../store/slices/examSlice";
import { useNavigate } from "react-router-dom";

const QuestionStepButtons = () => {
  const examState = useAppSelector((state) => state.exam);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAnsweredAllQuestions = useMemo(
    () => examState.questions.length === examState.userAnswers.length,
    [examState.questions.length, examState.userAnswers.length]
  );

  const isFirstQuestion = useMemo(
    () => examState.activeQuestion.order === 1,
    [examState.activeQuestion]
  );

  const isLastQuestion = useMemo(
    () => examState.activeQuestion.order === examState.questions.length,
    [examState]
  );

  const handleNext = useCallback(() => {
    if (isLastQuestion) dispatch(finishExam());
    else navigate(`/questions/${examState.activeQuestion.order + 1}`);
  }, [dispatch, examState.activeQuestion.order, isLastQuestion, navigate]);

  const handleBack = () =>
    navigate(`/questions/${examState.activeQuestion.order - 1}`);

  return (
    <div className={styles.questionStepButtons}>
      <div>
        {!isFirstQuestion && (
          <Button onClick={handleBack} startIcon={<BiChevronLeft size={24} />}>
            Önceki Soru
          </Button>
        )}
      </div>

      <div>
        <Button
          disabled={isLastQuestion && !isAnsweredAllQuestions}
          onClick={handleNext}
          endIcon={isLastQuestion ? null : <BiChevronRight size={24} />}
        >
          {isLastQuestion ? "Testi Bitir" : "Sonraki Soru"}
        </Button>
      </div>
    </div>
  );
};
export default QuestionStepButtons;
