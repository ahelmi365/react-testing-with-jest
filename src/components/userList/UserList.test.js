import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList Component", () => {
  function renderComponent() {
    const mockUserList = [
      { name: "Ali Helmi", email: "ahelmi@getgroup.com" },
      { name: "xyz", email: "xyz@getgroup.com" },
      { name: "abc", email: "abc@getgroup.com" },
    ];
    render(<UserList users={mockUserList} />);
    return { mockUserList };
  }

  it("renders UserList Component", () => {
    renderComponent();
  });
  // 1. render one row per user
  it("renders one row per user", () => {
    renderComponent();
    // find the table
    // const userTable = screen.getByTestId("userListTable");
    const userTable = screen.getByRole("table", { name: /user list table/i });
    expect(userTable).toBeInTheDocument();

    // find all rows in the table
    const allRows = screen.getAllByRole("row", { name: /user row/i });

    // assertion: correct number of rows in the table
    expect(allRows).toHaveLength(allRows.length);
  });

  // 2. render email and name of each user
  it("rendes email and name of each user", () => {
    const { mockUserList } = renderComponent();
    // screen.logTestingPlaygroundURL();
    for (const user of mockUserList) {
      const name = screen.getByRole("cell", { name: user.name });
      const email = screen.getByRole("cell", { name: user.email });

      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    }
  });
});
