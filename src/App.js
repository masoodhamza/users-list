import ErrorModal from "./components/ErrorModal";
import UserInputs from "./components/UserInputs";
import UsersList from "./components/UsersList";

const App = () => {
  return (
    <div className="App">
      <UserInputs />
      <UsersList />
      <ErrorModal />
    </div>
  );
};

export default App;
