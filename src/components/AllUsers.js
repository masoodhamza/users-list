const AllUsers = (props) => {
  return (
    <ul>      
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} age is {user.age}
        </li>
      ))}
    </ul>
  );
};

export default AllUsers;
