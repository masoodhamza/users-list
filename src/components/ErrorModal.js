import Button from "./Button";
import style from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={style.backdrop} onClick={props.onConfirm}>
      <div className={style.modal}>
        <h1 className={style.title}>{props.title}</h1>
        <p className={style.message}>{props.message}</p>
        <Button>OK</Button>
      </div>
    </div>
  );
};

export default ErrorModal;
