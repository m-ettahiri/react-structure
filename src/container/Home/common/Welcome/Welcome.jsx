import React, { useContext } from "react";
import { HomeContext } from "../../store/home.store";
import "./Welcome.css";

function Welcome() {
  const { state } = useContext(HomeContext);
  
  return (
    <section className="welcome">
      {state.toggle && <h1>Welcome to the home page</h1>}
    </section>
  );
}
export default Welcome;
