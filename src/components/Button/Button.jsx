import React from "react";
import { PropTypes } from "prop-types";
import "./Button.css";

function Button({ style, className, value, onClick, children }) {
  if (children) {
    return (
      <button style={style} className={"button " + className} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button style={style} className={"button " + className} onClick={onClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
};

export default React.memo(Button);
