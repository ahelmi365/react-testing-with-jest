import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

describe("UserForm Components", () => {
  it("renders UserForm component", () => {
    render(<UserForm />);
  });
  it("has an input field for user name", () => {
    render(<UserForm />);
    const userNameField = screen.getByTestId("name");
    screen.getAllByRole();
    expect(userNameField).toBeInTheDocument();
  });
  it("has an input field for user email", () => {
    render(<UserForm />);
    const userEmailField = screen.getByTestId("email");
    expect(userEmailField).toBeInTheDocument();
  });
  it("has a submit button", () => {
    render(<UserForm />);
    const submitBtn = screen.getByTestId("submit");
    expect(submitBtn).toBeInTheDocument();
  });

  it("calls onAddNewUser when the form is submitted", () => {
    render(<UserForm />);

    // simulate typing  in username
    const nameInput = screen.getByTestId("name");
    expect(nameInput).toBeInTheDocument();
    user.click(nameInput);
    user.keyboard("Ali Helmi");

    // simulate typing email
    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeInTheDocument();
    user.click(emailInput);
    user.click("ahelmi@getgroup.com");

    // find the submit button
    const submitBtn = screen.getByTestId("submit");
    expect(submitBtn).toBeInTheDocument();

    // simulate clicking sybmit button
    user.click(submitBtn);

    // assertion to make 'onAddNewUser" gets called
  });
});
