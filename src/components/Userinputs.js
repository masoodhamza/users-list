import React, { useState } from "react";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const UserInputs = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      console.log("empty fields");
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age",
      });
      return;
    }

    if (age < 0 || age > 120) {
      console.log("age not valid");
      setError({
        title: "Invalid Age",
        message: "Please enter valid age",
      });
      return;
    }

    props.onAddUser(name, age);

    setName("");
    setAge("");
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={nameChangeHandler}
            value={name}
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={ageChangeHandler}
            value={age}
          />
        </div>

        <Button>Add User</Button>
      </form>
    </>
  );
};

export default UserInputs;
