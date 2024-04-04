import Button from "../common/Button";
import Card from "../common/Card";
import IconButton from "../common/IconButton";
import styles from "./style.module.scss";
import { BiPaint, BiZoomIn, BiZoomOut, BiErrorCircle } from "react-icons/bi";

const Questions = () => {
  const question =
    "“Şair, şiirlerinde hava alacak boşluk bırakmıyor, her şeyi söylüyor. Okuyucunun adına da kendisi konuşuyor. Bunun için dizleri hayalinizi perdeliyor, soluğunuzu kesiyor, sizi boğuyor.” </br> </br>  <b>Bu parçada geçen “hava alacak boşluk bırakmamak” sözüyle anlatılmak istenen aşağıdakilerden hangisidir?</b>";
  return (
    <div className={styles.questions}>
      <h2 className={styles.questions__title}> Konu Tarama Testi #1</h2>
      <Card className={styles.questions__card}>
        <div className={styles.questions__cardToolbar}>
          <div className={styles.questions__cardToolbarBadge}>
            <h6>Soru: Türkçe #7</h6>
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

        <div className={styles.questions__cardBody}>
          <p dangerouslySetInnerHTML={{ __html: question }} />
          <div className={styles.questions__cardBodyAnswer}>
            <div className={styles.questions__cardBodyAnswerItem}>
              <input type="radio" name="option" value="1" />
              <p> A) Görgüsüzce davranmasaydın, seni böyle dışlamazdık.</p>
            </div>
            <div className={styles.questions__cardBodyAnswerItem}>
              <input type="radio" name="option" value="2" />
              <p> B) Görgüsüzce davranmasaydın, seni böyle dışlamazdık.</p>
            </div>
          </div>
        </div>
      </Card>
      <div className={styles.questions__footer}>
        <Button>Önceki Soru</Button>
        <Button>Sonraki Soru</Button>
      </div>
    </div>
  );
};

export default Questions;
