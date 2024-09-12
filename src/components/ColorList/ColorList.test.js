import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

describe("Color List", () => {
  it("renders color list", async () => {
    render(<ColorList />);

    // const listItems = screen.getAllByRole("listitem"); //error
    // const listItems = screen.queryAllByRole("listitem"); //error
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });
});
