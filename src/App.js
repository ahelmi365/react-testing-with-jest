import "./App.css";
import UserForm from "./components/userForm/UserForm";
import { useEffect, useState } from "react";
import UserList from "./components/userList/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const onAddNewUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  useEffect(() => {
    console.log({ users });
  }, [users]);
  return (
    <div className="App">
      <UserForm onAddNewUser={onAddNewUser} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
