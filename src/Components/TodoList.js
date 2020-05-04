import React from "react";
import TodoForm from "./TodoForm";
import Entry from "./Entry";

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
*/

export default class TodoList extends React.Component {
    state = {
        // we'll store them as an array that we keep updating over time
        entries: []
    }

    addEntry = (obj) => {
        // this function takes a todo and appends it to the beginning of our entries array
        // it's bad practise to mutate the field itself, so we'll make a clone of it, modify that, and then set the field to our modified array
        const newEntries = [...this.state.entries]; // spread operator, copies all elements of an array
        newEntries.push(obj); // push the new entry onto it
        this.setState({
            entries: newEntries // update our field to the new array
        })
    }

    completeEntry = (id) => {
        // find the entry that has this ID, and update the text so it's dashed through to show it's "completed"
        this.setState({
            entries: this.state.entries.map(element => {
                if (element.id === id) {
                    return {
                        id: element.id, // keep the id the same
                        text: element.text,
                        complete: !element.complete // inverse its current value. if it's ever true, make it dashed through
                    }
                } else {
                    return element; // don't do anything
                }
            })
        })
    }

    render() {
        return(
            // adding onSubmit as a prop
            <div>
                <TodoForm onSubmit={this.addEntry}/>
                {
                    this.state.entries.map(element => ( // each element will map to a "Entry" to display with an ID
                        <Entry
                            key={element.id}
                            completeEntry={() => this.completeEntry(element.id)} // pass a function as one of the prop fields so we can update
                            element={element}/> // we send the object entry over to Entry
                    ))
                }
            </div>
        )
    }
}