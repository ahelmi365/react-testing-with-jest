import React from "react";
import "./styles.css";

const UserList = ({ users }) => {
  console.log({ users });
  if (users?.length === 0) return <p>No users added</p>;
  return (
    <div>
      users are
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
