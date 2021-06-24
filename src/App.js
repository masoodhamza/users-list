import React, { useState } from "react";
import UserInputs from "./components/UserInputs";
import UsersList from "./components/UsersList";

const App = () => {
  const [addUsers, setAddUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setAddUsers((prevData) => {
      return [
        ...prevData,
        {
          name: name,
          age: age,
          id: Math.random().toString(),
        },
      ];
    });
  };

  console.log(addUsers);

  return (
    <div className="App">
      <UserInputs onAddUser={addUserHandler} />
      <UsersList users={addUsers} />
    </div>
  );
};

export default App;
