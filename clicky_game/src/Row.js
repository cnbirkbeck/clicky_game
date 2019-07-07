import React from "react";

// Create Row props with ability to make fluid
const Row = props => 
    <div className = {`row ${props.fluid ? "-fluid" : ""}`}>
        {props.children}
    </div>;
    
export default Row;    

