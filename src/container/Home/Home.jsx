import React, { useReducer, useMemo } from "react";
import { homeReducer, homeInitialState } from "./store/home.store";
import HomeProvider from "./store/home.provider";
import Welcome from "./common/Welcome/Welcome";
import Buttons from "./common/Buttons/Buttons";

function Home() {
  const [state, dispatch] = useReducer(homeReducer, homeInitialState);

  const store = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  
  return (
    <HomeProvider store={store}>
      <Buttons />
      <Welcome />
    </HomeProvider>
  );
}
export default Home;
