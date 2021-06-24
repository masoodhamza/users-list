import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <h1>Invalid Input</h1>
      <p>Please enter a valid name & age</p>
      <Button>OK</Button>
    </div>
  );
};

export default ErrorModal;
