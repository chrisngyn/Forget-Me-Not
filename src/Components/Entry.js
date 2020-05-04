import React from "react";

// Made a new component so that we can add more functionality
// each entry in our todo array will map to one of these Entry objects, our map function will map an entry to this function which makes a div
// each div, if you click on it, will call a function to "cross it off" and update its field complete from false to true
export default (props) => (
    <div style={{
        textDecoration: props.element.complete ? "line-through" : "" // if the complete field is true make it line through, else nothing
    }}
    onClick={props.completeEntry}>
        {props.element.text}
    </div>
)