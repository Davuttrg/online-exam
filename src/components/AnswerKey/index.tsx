import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { switchDisplayAnswer } from "../../store/slices/examSlice";
import { QuestionModel } from "../Questions/type";
import Button from "../common/Button";
import Card from "../common/Card";
import Switch from "../common/Switch";
import styles from "./style.module.scss";
import { BiPowerOff } from "react-icons/bi";

import { useState } from "react";
import AlertDialog from "../common/AlertDialog";
import { LocalAsset } from "../../constants";
import { useNavigate } from "react-router-dom";
import AnswerKeyRowItem from "./AnswerKeyRowItem";

const AnswerKey = () => {
  const examState = useAppSelector((state) => state.exam);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isCancelTextDialogOpened, setIsCancelTextDialogOpened] =
    useState(false);

  const handleDisplayAnswer = () => dispatch(switchDisplayAnswer());

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
            <AnswerKeyRowItem
              key={question.id}
              question={question}
              onClick={handleAnswerClick}
            />
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
