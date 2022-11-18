import Helpbtn from "./Helpbtn";
import { cleanup, fireEvent, screen, render } from "@testing-library/react";
import React from "react";
afterEach(cleanup);


test("renders helpbtn", () => {
  const { container } = render(<Helpbtn />);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const element = container.getElementsByClassName("helpIcon");
    expect(element).toBeTruthy();
});
