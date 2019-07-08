import React from "react";
import "./Wrapper.css";

// Create Wrapper prop
const Wrapper = props => <div className = "wrapper">{props.children}</div>;

export default Wrapper;