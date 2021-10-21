import React, {useState} from 'react';

export const TodosContext = React.createContext(
    {
        todos: [],
        addTodo: () => {},
        deleteTodo: () => {},
        updateTodo: () => {}
    }
);

// Provider
export const TodosContextProvider = (props) => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        let oldTodos = todos;
        oldTodos.push(todo);
        setTodos(oldTodos);
    }

    // deleteTodo
    const deleteTodo = (todoId) => {
        // so we don't work with the state directly
        let oldTodos = todos;

        // location of the todo item by id property
        const todoIndex = todos.findIndex(
            (todo) => {
                return (todo.id === todoId)
            }   
        );
        
        // delete one item from the todos, using its location, splicing it
        if (todoIndex !== -1) {
            oldTodos.splice(todoIndex, 1);
            setTodos([...oldTodos]);
        }
    }

    // update one todo item status
    const updateTodo = (todoId, isComplete) => {
        // so we don't work with the state directly
        let oldTodos = todos;

        // location of the todo item by id property
        const todoIndex = todos.findIndex(
            (todo) => {
                return (todo.id === todoId)
            }   
        );

        if (todoIndex !== -1) {
            // update one item by index location by array
            oldTodos[todoIndex].isComplete = isComplete;
            setTodos(oldTodos);
        }
    }

    // We need to return something because this is a wrapper component
    return (
        <TodosContext.Provider value={{todos: todos, addTodo: addTodo, updateTodo: updateTodo, deleteTodo: deleteTodo}}>
            {props.children}
        </TodosContext.Provider>
    )
}