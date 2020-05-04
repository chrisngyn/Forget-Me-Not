import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
    // object representation of this class
    state = {
        text: ""
    };

    updateEntry = (event) => {
        this.setState({
            // event.target.name refers to value={this.state.text}, so it's grabbing the name of this element
            // event.target.value refers to the current value in the input field
            // this is updating the state's "text" field to what's currently being typed
            [event.target.name]: event.target.value  
        });
    }

    enterEntry = (event) => {
        // this class just handles entering text and submitting it, we need a "master class" that will store all of the to-do's we have
        // on submit, this class will create a new entry and just send it over to our "master class"
        // our "master class" will be in TodoList.js, we'll have an array of to-do's that we keep updating
        // the default would refresh the page on submit, so we prevent that action
        event.preventDefault();
        this.props.onSubmit({ // here we make our todo object, and it will have three fields - id, text, and status (if it's complete or not)
            id: shortid.generate(),
            text: this.state.text,
            complete: false // be default say that the todo is NOT complete
        });
        this.setState({ // after we submit, clear the field
            text: ""
        })
    }

    render() {
        return(
            // input box that represents state's text field; value={this.state.text}, and onChange (as text is typed) call the updateText() function
            // need to wrap this input in a form so we can use the "onSubmit" event
            // need another function that will trigger when a user submits the input
            <form onSubmit={this.enterEntry}>
                <input
                    name="text"
                    value={this.state.text}
                    onChange={this.updateEntry}
                    placeholder="Take pizza out of the oven...">
                </input>
                <button onClick={this.enterEntry}>Submit</button>
            </form>
        );
    }
}