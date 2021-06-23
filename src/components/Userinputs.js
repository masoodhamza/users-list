import React, { useState } from "react";
import Button from "./Button";

const UserInputs = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      console.log("value is not valid");
      setIsValid(false);
      return;
    }

    console.log(name, age);
  };

  return (
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
  );
};

export default UserInputs;
