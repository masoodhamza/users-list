import style from "./AllUsers.module.css";

const AllUsers = (props) => {
  return (
    <div className={style.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} age is {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
