import styles from "./style.module.scss";
import Card from "../Card";
import { BiSolidErrorCircle, BiSolidXCircle, BiXCircle } from "react-icons/bi";

type AlertDialogLayout = "WARNING" | "ERROR";

interface AlertDialogProps {
  opened: boolean;
  onClose?: () => void;
  closable?: boolean;
  footer?: React.ReactNode;
  title?: string;
  message?: string;
  layout?: AlertDialogLayout;
}

const AlertDialog = ({
  opened,
  onClose,
  closable,
  footer,
  title,
  message,
  layout = "WARNING",
}: AlertDialogProps) => {
  const layoutIcon = {
    WARNING: <BiSolidErrorCircle size={50} />,
    ERROR: <BiSolidXCircle size={50} />,
  };

  return opened ? (
    <div className={styles.alertDialog}>
      {closable ? (
        <BiXCircle cursor="pointer" size={24} onClick={onClose} />
      ) : null}

      <Card className={styles.alertDialog__content}>
        <div className={styles.alertDialog__contentBody}>
          <div className={styles.alertDialog__contentBodyHeader}>
            {layoutIcon[layout]}
            <h2>{title}</h2>
          </div>
          <div className={styles.alertDialog__contentBodyMessage}>
            <p>{message} </p>
          </div>
        </div>
        <div className={styles.alertDialog__contentFooter}>{footer}</div>
      </Card>
    </div>
  ) : null;
};

export default AlertDialog;
