import "./styles.css";
import { Todo } from "../../todo/index";
import { useContext, useEffect, useState } from 'react';
import { TodosContext } from "../../../context/todos-context";

export const AllTodosPage = () => {

    // define todoElems in a state
    const [todoElements, setTodoElements] = useState([]);

    const todosContext = useContext(TodosContext);

    useEffect(() => {
        
        const todosElems = todosContext.todos.map( (todo) => {
            return (
                <Todo key={todo.id} text={todo.title} date={todo.date} isComplete={todo.isComplete} todoId={todo.id}></Todo> 
            )
        } )

        setTodoElements(todosElems);

    }, [todosContext.todos])

    // Cycle through the todos context and display all of them
    return(
        <div className="todos-container">
            {todoElements}
        </div>
    )
}