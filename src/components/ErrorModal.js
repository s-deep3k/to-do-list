import classes from "./ErrorModal.module.css";
import Card from "./UI/Card";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>{props.message}</div>
        <footer className={classes.actions}>
          <button onClick={props.onOkay}>Okay</button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
