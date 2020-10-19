import React from "react";
import { HomeContext } from "./home.store";
import { PropTypes } from "prop-types";

function HomeProvider({ children, store }) {
  return (
      <HomeContext.Provider value={store}>
        <main className="home">{children}</main>
      </HomeContext.Provider>
  );
}

HomeProvider.propTypes = {
  store: PropTypes.shape({
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HomeProvider;
