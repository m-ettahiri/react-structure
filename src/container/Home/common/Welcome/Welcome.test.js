import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";
import {HomeContext} from "../../store/home.store";

test("Welcome component", () => {
  const { container } = render(
    <HomeContext.Provider value={{ state: {}, dispatch: jest.fn() }}>
      <Welcome />
    </HomeContext.Provider>
  );
  expect(container.firstChild).toHaveClass("welcome");
});
