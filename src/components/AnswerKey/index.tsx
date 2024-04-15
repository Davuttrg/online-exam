import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { switchDisplayAnswer } from "../../store/slices/examSlice";
import { AnswerValueType, QuestionModel } from "../Questions/type";
import Button from "../common/Button";
import Card from "../common/Card";
import Switch from "../common/Switch";
import styles from "./style.module.scss";
import { BiPowerOff } from "react-icons/bi";
import cx from "classnames";
import { useState } from "react";
import AlertDialog from "../common/AlertDialog";
import { LocalAsset } from "../../constants";
import { useNavigate } from "react-router-dom";

const AnswerKey = () => {
  const examState = useAppSelector((state) => state.exam);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isCancelTextDialogOpened, setIsCancelTextDialogOpened] =
    useState(false);

  const handleDisplayAnswer = () => dispatch(switchDisplayAnswer());

  const userAnswerByQuestion = (
    question: QuestionModel,
    answer: AnswerValueType
  ) => {
    const userAnswer = examState.userAnswers.find(
      (item) => item.question.id === question.id
    );
    return userAnswer?.answer === answer;
  };

  const isCurrentQuestion = (question: QuestionModel) =>
    examState.activeQuestion.id === question.id;

  const handleAnswerClick = (question: QuestionModel) =>
    navigate(`/questions/${question.id}`);

  return (
    <div className={styles.answerKey}>
      <div className={styles.answerKey__toolbar}>
        <Button
          onClick={handleDisplayAnswer}
          className={styles.answerKey__toolbarShowAnswer}
          endIcon={
            <Switch
              onChange={handleDisplayAnswer}
              checked={examState.isDisplayAnswer}
            />
          }
        >
          Cevapları Göster
        </Button>
        <Button
          onClick={() => setIsCancelTextDialogOpened(true)}
          className={styles.answerKey__toolbarEndTest}
          color="warning"
          startIcon={
            <BiPowerOff
              className={styles.answerKey__toolbarEndTestIcon}
              size={24}
            />
          }
        >
          Testi Bitir
        </Button>
      </div>
      <Card className={styles.answerKey__card}>
        <div className={styles.answerKey__cardHeader}>
          <img src={LocalAsset.lessonCategoryIcon} alt="category" />

          <div className={styles.answerKey__cardHeaderCaption}>
            <h4>Türkçe</h4>
            <p>{`${examState.questions.length} Soru`} </p>
          </div>
        </div>

        <div className={styles.answerKey__cardAnswer}>
          {examState.questions.map((question) => (
            <div
              onClick={() => handleAnswerClick(question)}
              key={question.id}
              className={cx(styles.answerKey__cardAnswerRow, {
                [styles["answerKey__cardAnswerRow--active"]!]:
                  isCurrentQuestion(question),
              })}
            >
              <h5 className={styles.answerKey__cardAnswerRowQuestion}>
                {`${question.order}. Soru`}{" "}
              </h5>

              <ul className={styles.answerKey__cardAnswerRowOptions}>
                {question.answers.map((answer, i) => (
                  <li
                    key={answer.value + i}
                    className={cx(styles.answerKey__cardAnswerRowOptionsItem, {
                      [styles[
                        "answerKey__cardAnswerRowOptionsItem--answered"
                      ]!]: userAnswerByQuestion(question, answer.value),
                    })}
                  >
                    {answer.value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
      <AlertDialog
        title="Ayrılmak istediğine emin misin?"
        message="Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam edebilirsin."
        opened={isCancelTextDialogOpened}
        onClose={() => setIsCancelTextDialogOpened(false)}
        footer={
          <>
            <Button onClick={() => setIsCancelTextDialogOpened(false)}>
              Vazgeç
            </Button>
            <Button
              color="error"
              onClick={() => setIsCancelTextDialogOpened(false)}
            >
              Testten Çık
            </Button>
          </>
        }
      />
    </div>
  );
};

export default AnswerKey;
