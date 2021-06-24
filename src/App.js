import React, { useState } from "react";
import NewUsers from "./components/NewUser";
import AllUsers from "./components/AllUsers";

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
      <NewUsers onAddUser={addUserHandler} />
      <AllUsers users={addUsers} />
    </div>
  );
};

export default App;
