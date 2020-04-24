import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
    state = {
        text: "",
    }

    addEntry = (event) => {
        this.setState({
            [event.target.name]: event.target.value // value of event.target.value (which is the field "text") is equal to what user typed
        })
    }

    enterEntry = (event) => {
        event.preventDefault(); // so it doesn't refresh the page
        this.props.onSubmit({
            id: shortid.generate(), // using shortid library to make IDs
            text: this.state.text,
            complete: false,
        });
        this.setState({
            text: ""
        })
    }

    render() {
        return(
            <form onSubmit={this.enterEntry}>
                <input name="text" value={this.state.text} onChange={this.addEntry} placeholder="Enter something here!"></input>
                <button onClick={this.enterEntry}>Add entry</button>
            </form>
        )
    }
}