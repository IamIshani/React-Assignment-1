import ToDoItem from "./ToDoItem";

function ToDoList({ todos }) {
    return (
        <div>
            {
                todos.map((todo) => {
                    return <ToDoItem key={todo.id} todo={todo} />;
                })
            }
        </div>
    );
}

export default ToDoList;