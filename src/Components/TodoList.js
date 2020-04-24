import React from "react";
import TodoForm from './TodoForm';

/*
Todo List App Requirements - courtesy of https://www.youtube.com/watch?v=I6IY2TqnPDA:

1. add to do entries
2. display entries
3. cross off entries
4. show number of active entries
5. filter all / complete / active
6. delete entries
7. delete all completed ones - this option is only available if one IS completed
8. button to toggle all on / off

Alright, let's get started.
*/

export default class TodoList extends React.Component {
    state = {
        entries: [

        ]
    }

    addTodo = (todo) => {
        this.setState({ // don't want to update and replace previous text. only want to update and append something. how? add, then copy rest over
            state: [todo, ...this.state.entries]
        })
    }

    render() {
        return(
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {this.state.entries.map(todo => (<div></div>))}
            </div>
        )
    }
}