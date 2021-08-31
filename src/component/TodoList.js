import { useState } from "react";
import Todo from "./Todo";
import TodoForms from "./TodoForms";

const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (input) => {
    onUpdateTodo(edit.id, input);
    setEdit({ id: null, text: "", isCompleted: false });
  };

  const renderTodos = () => {
    if (todos.length === 0) {
      return <p>add Some Todo</p>;
    }
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div className="todos">
      {edit.id ? (
        <TodoForms submitHandler={editTodo} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
