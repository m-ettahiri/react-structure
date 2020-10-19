import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

test("Home component", () => {
  const { container } = render(<Home />);
  expect(container.firstChild).toHaveClass("home");
});
