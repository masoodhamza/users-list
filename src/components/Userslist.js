const UsersList = (props) => {
  return (
    <ul>
      <li>data</li>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} age is {user.age}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
