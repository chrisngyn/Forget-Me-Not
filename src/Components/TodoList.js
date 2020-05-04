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
        entries: [],
        currentState: "all" // by default we'll show all, as the user clicks on buttons we'll change this
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

    delete = (id) => {
        this.setState({
            entries: this.state.entries.filter(element => element.id != id) // when using filter the argument is a boolean expression, if true add it
        })
    }

    toggleAll = () => {
        this.setState({
            currentState: "all"
        })
    }

    toggleActive = () => {
        this.setState({
            currentState: "active"
        })
    }

    toggleComplete = () => {
        this.setState({
            currentState: "completed"
        })
    }

    render() {
        let display = [];

        if (this.state.currentState === "all") {
            display = this.state.entries;
        } else if (this.state.currentState === "active") {
            display = this.state.entries.filter(element => element.complete === false)
        } else {
            display = this.state.entries.filter(element => element.complete)
        }

        return(
            <div>
                <div>
                    Active: { // go through one by one and see if the element is incomplete
                        this.state.entries.filter(element => element.complete === false).length
                    }
                </div>
                

                <TodoForm onSubmit={this.addEntry}/>


                <div>
                    <button onClick={this.toggleAll}>Show ALL</button>
                    <button onClick={this.toggleActive}>Show ACTIVE</button>
                    <button onClick={this.toggleComplete}>Show COMPLETED</button>
                </div>


                {
                    display.map(element => ( // each element will map to a "Entry" to display with an ID
                        <Entry
                            key={element.id}
                            completeEntry={() => this.completeEntry(element.id)} // pass a function as one of the prop fields so we can update
                            delete={() => this.delete(element.id)}
                            element={element}/> // we send the object entry over to Entry
                    ))
                }
            </div>
        )
    }
}