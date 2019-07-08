import React from "react";
import"./Title.css";

//create title prop
const Title = props => <h1 className = "title">{props.children}</h1>;

export default Title;