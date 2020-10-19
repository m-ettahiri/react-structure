import React, { useContext, useCallback } from "react";
import { HomeContext, actions } from "../../store/home.store";
import "./Buttons.css";
import { Button } from "../../../../components";

function Buttons() {
  const {state, dispatch } = useContext(HomeContext);

  const handleClick = useCallback(() => {
    dispatch({ type: actions.TOGGLE });
  },[state]);
  
  return (
    <section className="buttons">
      <Button onClick={handleClick}>click me</Button>
    </section>
  );
}
export default Buttons;
