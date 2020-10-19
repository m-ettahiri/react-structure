import React from "react";
import actions from "./home.actions";

const HomeContext = React.createContext();

const homeInitialState = {
  toggle: false,
};

const homeReducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };
    default :
     throw {error:'home action error',action:action}
  }
};

export { HomeContext, homeInitialState, homeReducer, actions };
