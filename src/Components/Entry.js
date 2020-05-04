import React from "react";

// Made a new component so that we can add more functionality
// each entry in our todo array will map to one of these Entry objects, our map function will map an entry to this function which makes a div
// each div, if you click on it, will call a function to "cross it off" and update its field complete from false to true

// our props object: key (id), completeEntry (a clickable function), and element (our actual entry state element, 'element.text' because of TodoForm)

export default (props) => (
    // we want to add a "delete" button to each div too, so let's make another div for the button and wrap both divs into one bigger div
    <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ textDecoration: props.element.complete ? "line-through" : "" }} onClick={props.completeEntry}>
            {props.element.text}
        </div>
        <button onClick={props.delete}>Delete</button>
    </div>
)