import Button from "./Button";
import style from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={style.backdrop}>
      <div className={style.modal} onClick={props.onConfirm}>
        <h1 className={style.title}>{props.title}</h1>
        <p className={style.message}>{props.message}</p>
        <Button className={style.button}>OK</Button>
      </div>
    </div>
  );
};

export default ErrorModal;
