import React, { useState } from "react";

const UserForm = ({ onAddNewUser }) => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    onAddNewUser({ name, email });
  };
  return (
    <div>
      <h1>Add User</h1>

      <form name="userForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            data-testid="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            id="userEmail"
            data-testid="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
