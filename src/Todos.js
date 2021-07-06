import React, { Component } from 'react';
import { addTodo, completeTodo, getTodos } from './utils';

export default class Todos extends Component {

    state = {
        todos: [],
        todo: '',
    }

    componentDidMount = async () => {
        await this.doSomeFetching()
    }

    doSomeFetching = async () => {
        const todos = await getTodos(this.props.token);
        this.setState({ todos:todos })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await addTodo(this.state.todo, this.props.token);
        await this.doSomeFetching();
        e.target.reset();
    }

    handleTodoChange = (e) => {
        this.setState({ todo: e.target.value })
    }



    render() {
        return (
            <div>
                <content>
                    <form obSubmit={this.handleSubmit}>
                        <label>
                            Todo
                            <input onChange={this.handleTodoChange} />
                        </label>
                        <button>
                            Add Todo
                        </button>
                    </form>
                </content>
                <main>
                    {
                        this.state.todos.map(item =>
                            <p
                            key={`${item.todo}${item.id}`}
                            onClick={async () => {
                                await completeTodo(item.id, this.props.token)
                                await this.doSomeFetching()
                            }}
                            >
                                {item.todo}
                            </p>
                            
                            )
                    }
                </main>
            </div>
        )
    }
}
