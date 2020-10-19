import React from "react";
import { render,screen } from "@testing-library/react";
import Buttons from "./Buttons";
import {HomeContext} from "../../store/home.store";
test("Buttons component", () => {
    const {container} = render(
    <HomeContext.Provider value={{state:{},dispatch:jest.fn()}}>
      <Buttons />
    </HomeContext.Provider>
  );
  expect(container.firstChild).toHaveClass("buttons");
});
