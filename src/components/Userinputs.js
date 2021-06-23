import Button from "./Button";

const UserInputs = () => {
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" />
      </div>

      <Button>Add User</Button>
    </form>
  );
};

export default UserInputs;
