/* eslint-disable testing-library/no-debugging-utils */
import { act, render, screen } from "@testing-library/react";
import ColorList from "./ColorList";
const pause = () => new Promise((resolve) => setTimeout(() => resolve(), 1000));
describe("Color List", () => {
  it("renders color list using queryAllByRole", async () => {
    render(<ColorList />);
    // console.log("Before");
    // screen.debug();
    // await pause();
    // console.log("After");
    // screen.debug();

    // const listItems = screen.getAllByRole("listitem"); //error
    const listItems = screen.queryAllByRole("listitem"); //error

    // expect(listItems).toHaveLength(3);
  });

  it("renders color list using findAllByRole", async () => {
    render(<ColorList />);
    console.log("Before");

    screen.debug();
    await pause();
    console.log("After");
    screen.debug();

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  it("renders color list using act() from RTL", async () => {
    render(<ColorList />);
    console.log("Before");
    screen.debug();

    await act(async () => {
      await pause();
    });
    console.log("After");
    screen.debug();

    const listItems = screen.queryAllByRole("listitem"); // no error
    expect(listItems).toHaveLength(3);
  });
});
