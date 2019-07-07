import React from "react";

// create a container
const Container = props => 
    <div className = {`container ${props.fluid ? "-fluid" : ""}`}>
        {props.children}
    </div>;

export default Container;
