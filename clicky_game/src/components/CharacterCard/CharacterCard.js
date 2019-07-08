import React from "react";
import "./CharacterCard.css";

//create character card prop
const CharacterCard = props => (
    <div 
        className = "card" 
        value = {props.id}
        onClick= {() => props.handleClick(props.id)}
    >
        <div className = "img-container">
            <img alt = {props.name} src = {props.img}/>
        </div>
    </div>    
);

export default CharacterCard;