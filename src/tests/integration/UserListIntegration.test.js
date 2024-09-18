import { render, screen } from "@testing-library/react";

import UserForm from "../../components/userForm/UserForm";
import UserList from "../../components/userList/UserList";
import user from "@testing-library/user-event";
import { useState } from "react";

const UserListFormWrapper = () => {
  const [users, setUsers] = useState([]);
  const onAddNewUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <>
      <UserForm onAddNewUser={onAddNewUser} />
      <UserList users={users} />
    </>
  );
};
describe("UserListIntegration Components", () => {
  it("render(<UserForm />);renders both UserForm and UserList", () => {
    // render(<UserForm onAddNewUser={onAddNewUser} />);
    render(<UserListFormWrapper />);

    // find name field
    const nameField = screen.getByRole("textbox", { name: /name/i });

    // find email field
    const emailField = screen.getByRole("textbox", { name: /email/i });

    // assert name and email are in the Dom
    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();

    // simulate entering name and email
    user.click(nameField);
    user.type("Ali Helmi");

    user.click(emailField);
    user.type("ahelmi@getgroup.com");

    // find submit button
    const submitBtn = screen.getByRole("button", { name: /submit/i });
    expect(submitBtn).toBeInTheDocument();

    // simulate click on submit button
    user.click(submitBtn);
    // find table in user list
    const userListTable = screen.getByRole("table", {
      name: /user list table/i,
    });
    expect(userListTable).toBeInTheDocument();

    // assert number of rows to be 1
    const allRows = screen.getAllByRole("row", { name: /user row/i });
    expect(allRows).toHaveLength(1);

    // assert name to be = "Ali Helmi"
    // assert email to be = "ahelmi@getgroup.com"
  });
});
