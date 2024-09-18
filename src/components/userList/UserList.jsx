import React from "react";
import "./styles.css";

const UserList = ({ users }) => {
  const renderedUsers = users?.map((user) => (
    <tr key={user.email} data-testid="userTR" aria-label="user row">
      <td data-testid="name">{user.name}</td>
      <td data-testid="email">{user.email}</td>
    </tr>
  ));
  if (users?.length === 0) return <p>No users added</p>;
  return (
    <div>
      users are
      <table data-testid="userListTable" aria-label="user list table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody data-testid="userTableBody">{renderedUsers}</tbody>
      </table>
    </div>
  );
};

export default UserList;
