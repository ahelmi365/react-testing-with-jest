import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

describe("UserForm Components", () => {
  function rednerComponent() {}
  it("renders UserForm component", () => {
    rednerComponent();
  });
  it("has an input field for user name", () => {
    rednerComponent();
    const userNameField = screen.getByTestId("name");
    expect(userNameField).toBeInTheDocument();
  });
  it("has an input field for user email", () => {
    rednerComponent();
    const userEmailField = screen.getByTestId("email");
    expect(userEmailField).toBeInTheDocument();
  });
  it("has a submit button", () => {
    rednerComponent();
    const submitBtn = screen.getByTestId("submit");
    expect(submitBtn).toBeInTheDocument();
  });

  it("calls onAddNewUser when the form is submitted", () => {
    const onAddNewUserMock = jest.fn();
    render(<UserForm onAddNewUser={onAddNewUserMock} />);
    const userData = {
      name: "Ali Helmi",
      email: "ahelmi@getgroup.com",
    };

    // simulate typing  in username
    // const nameInput = screen.getByTestId("name");
    // screen.logTestingPlaygroundURL();
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    expect(nameInput).toBeInTheDocument();
    user.click(nameInput);
    user.keyboard(userData.name);

    // simulate typing email
    // const emailInput = screen.getByTestId("email");
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    expect(emailInput).toBeInTheDocument();
    user.click(emailInput);
    user.keyboard(userData.email);

    // find the submit button
    // const submitBtn = screen.getByTestId("submit");
    const submitBtn = screen.getByRole("button", { name: /submit/i });
    expect(submitBtn).toBeInTheDocument();

    // simulate clicking submit button
    user.click(submitBtn);

    // assertion to make 'onAddNewUser" gets called
    expect(onAddNewUserMock).toHaveBeenCalledTimes(1);
    expect(onAddNewUserMock).toHaveBeenCalledWith({
      name: userData.name,
      email: userData.email,
    });
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
  });
});
