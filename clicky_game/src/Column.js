import React from "react";

// Create prop for Columns and add fluid
const Column = props =>{
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
    return(
        <div className = {size}>
            {props.children}
        </div>
    );
    
};  

export default Column;