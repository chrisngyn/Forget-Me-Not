import React from "react";
import TodoForm from "./TodoForm";

/*
Todo List app requirements - courtesy of https://www.youtube.com/watch?v=I6IY2TqnPDA

1. add to do entries
2. display entries
3. cross off entries
4. show number of active entries
5. filter all / complete / active
6. delete entries
7. delete all completed ones - this option is only available if at least one IS completed
8. button to toggle all on / off

Alright, let's get started.
*/

export default class TodoList extends React.Component {
    state = {
        // we'll store them as an array that we keep updating over time
        entries: [

        ]
    }

    addEntry = (todo) => {
        // this function takes a todo and appends it to the beginning of our entries array
        // it's bad practise to mutate the actual field itself, so we'll make a clone of it, modify that, and then set the field to our modified array
        const newEntries = [...this.state.entries]; // spread operator, copies all elements of an array
        newEntries.push(todo); // push the new entry onto it
        this.setState({
            entries: newEntries // update our field to the new array
        })
    }

    render() {
        return(
            // adding onSubmit as a prop
            <div>
                <TodoForm onSubmit={this.addEntry}/>
                {JSON.stringify(this.state.entries)}
            </div>
        )
    }
}